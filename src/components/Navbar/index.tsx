import { useEffect, useRef, useState } from "react";
import { Search } from "@material-ui/icons";
import { IconButton } from "@material-ui/core";
import {
  NavbarContainer,
  Wrapper,
  LeftWrapper,
  SearchWrapper,
  ErrorMessage,
} from "./index.style";
import { SearchValueHandleProps } from "../../types";

const Navbar = ({
  searchValueHandle,
  isError,
  errMsg,
}: SearchValueHandleProps) => {
  const [isScrolled, setIsScrolled] = useState(false); //when scrolled down, let background color black
  const [showSearchBar, setShowSearchBar] = useState(true);
  const [showErrMsg, setShowErrMsg] = useState(true);
  const [inputValue, setInputValue] = useState("");
  const searchRef = useRef() as React.MutableRefObject<HTMLInputElement>;

  useEffect(() => {
    if (isError ) {
      const errMsgDisplayedTime = setTimeout(() => {
        setShowErrMsg(false);
      }, 3000);
      return () => {
        clearTimeout(errMsgDisplayedTime);
        setShowErrMsg(true)
      };
    }
  }, [isError, errMsg, searchRef]);
  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  const inputHandleOnClick = () => {
    searchValueHandle(inputValue);
  };
  const handleInputSearchChange = (): any => {
    setInputValue(searchRef.current.value);
  };
  return (
    <NavbarContainer isScrolled={isScrolled}>
      <Wrapper>
        <LeftWrapper>
          <SearchWrapper showSearchBar={showSearchBar}>
            {showSearchBar ? (
              <input
                placeholder="Search any city you want...."
                ref={searchRef}
                onChange={handleInputSearchChange}
              />
            ) : null}
            <IconButton
              onClick={inputHandleOnClick}
              disabled={String(inputValue).length === 0 ? true : false}
            >
              <Search />
            </IconButton>
          </SearchWrapper>
          {isError && showErrMsg && <ErrorMessage>{errMsg}</ErrorMessage>}
        </LeftWrapper>
      </Wrapper>
    </NavbarContainer>
  );
};

export default Navbar;
