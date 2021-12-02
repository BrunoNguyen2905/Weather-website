import styled from "styled-components";
import { showSearchBarProp, isScrolledProps } from "../../types";
export const NavbarContainer = styled.div<isScrolledProps>`
//   background: ${(props) => props.isScrolled ? '#0b0b0b': 'linear-gradient(to top, transparent 0%, rgb(0,0,0,0.3) 50%)'};
background: ${(props) => props.isScrolled ? '#A9A9A9': 'linear-gradient(to top, transparent 0%, rgb(0,0,0,0.3) 50%)'};

  color: white;
  width: 100%;
  font-size: 14px;
  position: fixed;
  top: 0;
`;
export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 48px;
  height: 70px;
  align-items: center;
`;
export const LeftWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const RightWrapper = styled.div`
  display: flex;
  align-items: center;

  .MuiSvgIcon-root {
    color: lightgray;
  }
`;

export const SearchWrapper = styled.div<showSearchBarProp>`
  background: ${(props) => (props.showSearchBar ? '#0b0b0b': 'transparent')};
  border: ${(props) => (props.showSearchBar ? "1px solid lightgray" : "none")};
  border-radius: 12px;
  transition: all 1s ease;
  input {
    background: transparent;
    padding-left: 12px;
    border: none;
    outline: none;
    color: white;
    font-weight: 600;

    ::placeholder,
    ::-webkit-input-placeholder,
    :-ms-input-placeholder {
      color: white;
    }
    &::focus {
      border: none;
      outline: none;
    }
  }
  .MuiSvgIcon-root {
    color: lightgray;
  }
`;

