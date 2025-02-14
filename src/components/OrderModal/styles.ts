import styled from "styled-components";

export const Overlay = styled.div`
    left: 0;
    top: 0;
    background: rgba(0,0,0,0.8);
    backdrop-filter: blur(4.5px);
    height: 100%;
    width: 100%;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
`


export const ModalOverlay = styled.div`
    background-color: white;
    width: 480px;
    border-radius: 8px;
    padding: 32px;
    header{
        display: flex;
        align-items: center;
        font-size: 24px;
        justify-content: space-between;
        button{
            line-height: 0;
            border: 0;
            background-color: transparent;
        }
    }
    .status-container{
        padding-top: 32px;
        > div {
            margin-top: 8px;
            display: flex;
            gap: 8px;
            align-items: center;
        }
    }
`

export const OrderDetails = styled.div`
    margin-top: 32px;
    > strong{
        font-weight: 500;
        font-size: 14px;
        opacity: .8;
    }
    .order{
        margin-top: 16px;
        .item{
            display: flex;
            img{
                border-radius: 6px;
            }
            & + .item{
            margin-top: 16px;
            }
            .quantity{
                font-size: 14px;
                color:#666;
                display: block;
                min-width: 20px;
                margin-left: 12px;
            }
            .details{
                margin-left: 4px;
                strong{
                    display: block;
                    margin-bottom: 4px;
                }
                span{
                    font-size: 14px;
                    color: #666;
                }
            }
        }
        .total{
            display: flex;
            align-items: center;
            justify-content:space-between;
            margin-top: 24px;
            span{
                font-size: 14px;
                font-weight: 500;
                opacity: .8;
            }
        }
    }

`
export const Actions = styled.footer`
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-top: 32px;
    .primary{
        background: #333333;
        font-size: 16px;
        border:0;
        border-radius: 48px;
        color: #ffffff;
        padding: 12px 24px;
        display: flex;
        gap: 8px;
        justify-content: center;
        align-items: center;
    }
    .secondary{
        padding: 14px 24px;
        color: #D73035;
        border: 0;
        background: transparent;
    }
    button:disabled{
        opacity: .5;
        cursor: not-allowed;
    }
`
