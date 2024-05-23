"use client";

import { useState, useEffect } from "react";
import styled from "styled-components";

import BaseContainer from "@/components/container";

import { getProducts } from "@/api/products";

import { ProductType } from "@/lib/types";

import Header from "@/parts/homepage/header";
import Search from "@/parts/homepage/search";
import Category from "@/parts/homepage/category";
import Popular from "@/parts/homepage/popular";

function Home() {
  const [searchValue, setSearchValue] = useState<string>("");
  const [products, setProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    async function fetchData() {
      const { data } = await getProducts();
      setProducts(data);
    }

    fetchData();
  }, []);

  return (
    <Container>
      <Header />

      <div style={{ marginTop: "24px" }}>
        <div className="name">Hi Mr. Michael,</div>
        <div className="title">Welcome Back!</div>
      </div>

      <Search onChange={(e) => setSearchValue(e.target.value)} />
      <Category />
      <Popular products={products} />
    </Container>
  );
}

export default Home;

const Container = styled(BaseContainer)`
  padding: 16px;
  min-height: calc(100vh - 32px);

  .name {
    color: ${(props) => props.theme.colors.doveGray};
  }

  .title {
    margin-top: 8px;
    font-size: 24px;
    color: ${(props) => props.theme.colors.black};
    font-weight: 600;
  }
`;
