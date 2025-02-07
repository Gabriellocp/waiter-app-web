import { useState } from "react";
import { Order } from "../../types/Order";
import { OrderModal } from "../OrderModal";
import { Board, InfoContainer } from "./styles";
interface IOrderCardProps {
    icon: string;
    title: string;
    orders: Order[];
}
export function OrderCard({ icon, title, orders }: IOrderCardProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
    const handleOpenModal = (order: Order) => {
        setIsModalOpen((prev) => !prev);
        setSelectedOrder(order);
    };
    const handleCloseModal = () => {
        setIsModalOpen(false);
    };
    return (
        <Board>
            <OrderModal
                visible={isModalOpen}
                order={selectedOrder}
                onClose={handleCloseModal}
            />
            <header>
                <span>{icon}</span>
                <strong>{title}</strong>
                <span>(1)</span>
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
