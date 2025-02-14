import closeIcon from "../../assets/images/close-icon.svg";
import { Order } from "../../types/Order";
import { formatCurrency } from "../../utils/formatCurency";
import { Actions, ModalOverlay, OrderDetails, Overlay } from "./styles";
interface IOrderModalProps {
    visible: boolean;
    order: Order | null;
    onClose: () => void;
    onCancelOrder: () => Promise<void>;
    isLoading: boolean;
}
export function OrderModal({
    visible,
    order,
    onClose,
    isLoading,
    onCancelOrder,
}: IOrderModalProps) {
    if (!visible || !order) {
        return null;
    }
    const total = order.products.reduce((acc, curr) => {
        return (acc += curr.quantity * curr.product.price);
    }, 0);
    return (
        <Overlay>
            <ModalOverlay>
                <header>
                    <strong>{order.table}</strong>
                    <button onClick={onClose}>
                        <img src={closeIcon}></img>
                    </button>
                </header>
                <div className="status-container">
                    <small>Status do pedido</small>
                    <div>
                        <span>
                            {
                                {
                                    WAITING: "🕒",
                                    IN_PRODUCTION: "👨‍🍳",
                                    DONE: "✅",
                                }[order.status]
                            }
                        </span>
                        <strong>
                            {
                                {
                                    WAITING: "Fila de espera",
                                    IN_PRODUCTION: "Em preparação",
                                    DONE: "Pronto",
                                }[order.status]
                            }
                        </strong>
                    </div>
                </div>
                <OrderDetails>
                    <strong>Itens</strong>
                    <div className="order">
                        {order.products.map(({ _id, product, quantity }) => (
                            <div className="item" key={_id}>
                                <img
                                    width={56}
                                    height={28}
                                    src={`http://localhost:3001/uploads/${product.imagePath}`}
                                />
                                <span className="quantity">{quantity}x</span>
                                <div className="details">
                                    <strong>{product.name}</strong>
                                    <span>{formatCurrency(product.price)}</span>
                                </div>
                            </div>
                        ))}
                        <div className="total">
                            <span>Total</span>
                            <strong>{formatCurrency(total)}</strong>
                        </div>
                    </div>
                </OrderDetails>
                <Actions>
                    <button
                        type="button"
                        className="primary"
                        disabled={isLoading}
                    >
                        <span>👨‍🍳</span>
                        <strong>Iniciar produção</strong>
                    </button>
                    <button
                        type="button"
                        className="secondary"
                        onClick={onCancelOrder}
                        disabled={isLoading}
                    >
                        <strong>Cancelar pedido</strong>
                    </button>
                </Actions>
            </ModalOverlay>
        </Overlay>
    );
}
