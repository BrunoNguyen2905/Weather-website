import styled from 'styled-components/macro'

export const DailyCardsSliderContainer = styled.div`
   background: lightgray;
   height: 36vh;
`;

export const DailyCardsWrapper = styled.div`
   display: flex;
   margin-top: 40px;
   justify-content: space-around;
    &:hover  div {  //&hover *: hover but dont know what child element tag is
        transform: translateX(-25%);
        cursor: pointer;
        // display:flex;
        // flex-direction: column;
        // justify-content: flex-start;
    }
`;

export const DailyTitle = styled.p`
    font-size: 32px;
`