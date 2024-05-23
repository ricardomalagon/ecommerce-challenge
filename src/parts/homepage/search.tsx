"use client";

import styled from "styled-components";
import { ChangeEvent } from "react";

import SearchBar from "@/components/search-bar";

type Props = {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

function Search(props: Props) {
  return (
    <Container>
      <SearchBar
        placeholder="Search burger, pizza, drink or etc..."
        onChange={props.onChange}
      />
    </Container>
  );
}

export default Search;

const Container = styled.div`
  margin-top: 32px;
`;
