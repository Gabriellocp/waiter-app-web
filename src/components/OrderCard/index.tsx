import { useState } from "react";
import { toast } from "react-toastify";
import { Order } from "../../types/Order";
import { api } from "../../utils/api";
import { OrderModal } from "../OrderModal";
import { Board, InfoContainer } from "./styles";
interface IOrderCardProps {
    icon: string;
    title: string;
    orders: Order[];
    onCancel: (id: string) => void;
    onStatusChange: (id: string, status: Order["status"]) => void;
}
export function OrderCard({
    icon,
    title,
    orders,
    onCancel,
    onStatusChange,
}: IOrderCardProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
    const handleOpenModal = (order: Order) => {
        setIsModalOpen((prev) => !prev);
        setSelectedOrder(order);
    };
    const handleCloseModal = () => {
        setIsModalOpen(false);
    };
    const handleCancelOrder = async () => {
        try {
            setIsLoading(true);
            await api.delete(`/orders/${selectedOrder!._id}`);
            handleCloseModal();
            onCancel(selectedOrder!._id);
            toast.success(
                `O pedido da mesa ${selectedOrder!.table} foi cancelado!`
            );
        } catch {
        } finally {
            setIsLoading(false);
        }
    };
    const handleChangeOrderStatus = async () => {
        try {
            setIsLoading(true);
            const newStatus: Order["status"] =
                selectedOrder!.status === "WAITING" ? "IN_PRODUCTION" : "DONE";
            await api.patch(`/orders/${selectedOrder!._id}`, {
                status: newStatus,
            });
            toast.success(
                `O pedido da mesa ${selectedOrder?.table} foi de ${selectedOrder?.status} para ${newStatus}`
            );
            handleCloseModal();
            onStatusChange(selectedOrder!._id, newStatus);
        } catch {
        } finally {
            setIsLoading(false);
        }
    };
    return (
        <Board>
            <OrderModal
                visible={isModalOpen}
                order={selectedOrder}
                onClose={handleCloseModal}
                isLoading={isLoading}
                onCancelOrder={handleCancelOrder}
                onChangeOrderStatus={handleChangeOrderStatus}
            />
            <header>
                <span>{icon}</span>
                <strong>{title}</strong>
                <span>({orders.length})</span>
            </header>
            {orders.length > 0 ? (
                <InfoContainer>
                    {orders.map((order) => (
                        <button
                            type="button"
                            key={order._id}
                            onClick={() => handleOpenModal(order)}
                        >
                            <strong>{order.table}</strong>
                            <span>{`${order.products.length} itens`}</span>
                        </button>
                    ))}
                </InfoContainer>
            ) : (
                <strong>Nenhum item</strong>
            )}
        </Board>
    );
}
