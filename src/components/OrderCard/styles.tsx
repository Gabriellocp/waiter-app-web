import styled from "styled-components";

export const Board = styled.div`
    flex: 1;
    padding: 16px;
    border: 1px solid rgba(204, 204, 204, 0.5);
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    header {
        padding: 8px;
        font-size: 14px;
        display: flex;
        align-items: center;
        gap: 8px;
    }
`;
export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 24px;
    width: 100%;
    button {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 4px;
        height: 128px;
        border: 1px solid rgba(204, 204, 204, 0.5);
        border-radius: 8px;
        width: 100%;
        background-color: white;
        strong {
            font-weight: 500;
        }
        span {
            font-size: 14px;
            color: #666;
        }
        & + button {
            margin-top: 24px;
        }
    }
`;
