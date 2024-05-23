import { ChangeEvent } from "react";
import styled from "styled-components";
import Image from "next/image";

import search_icon from "@/assets/images/search-icon.svg";

type Props = {
  placeholder?: string;
  style?: React.CSSProperties;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  value?: string;
};

function SearchBar(props: Props) {
  return (
    <Wrapper>
      <div className="container">
        <Image src={search_icon} width={18} height={18} alt="Icon" />
        <input className="input" {...props} />
      </div>
    </Wrapper>
  );
}

export default SearchBar;

const Wrapper = styled.div`
  width: 100%;

  .container {
    display: flex;
    align-items: center;
    padding: 0 18px;
    height: 40px;
    background-color: ${(props) => props.theme.colors.white};
    border-radius: 8px;
  }

  .input {
    padding-left: 16px;
    width: 100%;
    border: 0;
    border-radius: 8px;
    background-color: ${(props) => props.theme.colors.white};
    color: ${(props) => props.theme.colors.black};
    font-size: 14px;

    &:focus {
      outline: none;
    }
  }
`;
