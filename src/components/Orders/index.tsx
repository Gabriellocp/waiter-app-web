import { OrderCard } from "../OrderCard";
import { OrdersContainer } from "./styles";

export function Orders() {
    return (
        <OrdersContainer>
            <OrderCard
                icon="🕒"
                title="Fila de espera"
                orders={[
                    {
                        _id: "123",
                        products: [
                            {
                                _id: "123",
                                quantity: 30,
                                product: {
                                    imagePath: "asdas",
                                    name: "Pizza",
                                    price: 20,
                                },
                            },
                        ],
                        status: "WAITING",
                        table: "123",
                    },
                ]}
            />
            <OrderCard icon="👨‍🍳" title="Preparando..." orders={[]} />
            <OrderCard icon="✅" title="Pronto" orders={[]} />
        </OrdersContainer>
    );
}
