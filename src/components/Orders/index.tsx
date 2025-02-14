import { useEffect, useState } from "react";
import { Order } from "../../types/Order";
import { api } from "../../utils/api";
import { OrderCard } from "../OrderCard";
import { OrdersContainer } from "./styles";

export function Orders() {
    const [orders, setOrders] = useState<Order[]>([]);
    const handleCancelOrder = (id: string) => {
        setOrders((prev) => [...prev].filter((order) => order._id !== id));
    };
    useEffect(() => {
        const fetch = async () => {
            try {
                const response = await api.get("/orders");
                setOrders(response.data.orders);
            } catch {}
        };
        fetch();
    }, []);
    const waiting = orders.filter((order) => order.status === "WAITING");
    const production = orders.filter(
        (order) => order.status === "IN_PRODUCTION"
    );
    const done = orders.filter((order) => order.status === "DONE");
    return (
        <OrdersContainer>
            <OrderCard
                icon="🕒"
                title="Fila de espera"
                orders={waiting}
                onCancel={handleCancelOrder}
            />
            <OrderCard
                icon="👨‍🍳"
                title="Preparando..."
                orders={production}
                onCancel={handleCancelOrder}
            />
            <OrderCard
                icon="✅"
                title="Pronto"
                orders={done}
                onCancel={handleCancelOrder}
            />
        </OrdersContainer>
    );
}
