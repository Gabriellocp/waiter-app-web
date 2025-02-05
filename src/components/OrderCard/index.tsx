import { Order } from "../../types/Order";
import { Board, InfoContainer } from "./styles";
interface IOrderCardProps {
    icon: string;
    title: string;
    orders: Order[];
}
export function OrderCard({ icon, title, orders }: IOrderCardProps) {
    return (
        <Board>
            <header>
                <span>{icon}</span>
                <strong>{title}</strong>
                <span>(1)</span>
            </header>
            {orders.length > 0 ? (
                <InfoContainer>
                    {orders.map((order) => (
                        <button type="button" key={order._id}>
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
