import styled from 'styled-components/macro'

export const DailyCardContainer = styled.div`
    // display: flex;
    // flex-direction: column;
    // align-items: center;
    flex: 0 0 19.7%;
    margin: 0 2px;
    transition: transform 300ms ease 100ms;
    img {
        margin-left: 20px;

    }
    &:hover {
        transform: translateX(25%);
        transform: scale(1.5) !important;
    }
`;


export const DailyTemp = styled.p`
    font-size: 32px;
    margin-left: 20px;
`

export const DailyDesc = styled.p`
    font-size: 12px;
    margin-left: 20px;
`