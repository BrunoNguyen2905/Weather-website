import styled from 'styled-components/macro'
import {fontSizeProps} from '../../types'

export const TwoOptionsContainer = styled.div`
   display: flex;
    flex-direction: column;
}
`;

export const OptionValue = styled.p<fontSizeProps>`
   font-size: ${(props) => props.isDegree ?  '20px': '16px'} !important;
   cursor: pointer;
`;
