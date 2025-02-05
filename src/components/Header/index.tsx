import Logo from "../../assets/images/logo.svg";
import { ContentContainer, HeaderContainer } from "./styles";

export function Header() {
    return (
        <HeaderContainer>
            <ContentContainer>
                <div>
                    <h1>Pedidos</h1>
                    <h2>Acompanhe o pedido dos clientes</h2>
                </div>
                <img src={Logo} alt="WAITERAPP" />
            </ContentContainer>
        </HeaderContainer>
    );
}
