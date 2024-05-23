"use client";

import styled from "styled-components";

import ProductCard from "@/components/product-card";

import { ProductType } from "@/lib/types";

function Popular({ products }: { products: ProductType[] }) {
  return (
    <Container>
      <div className="container">
        <span className="category-title">Popular</span>
        <button className="see-all">See all</button>
      </div>

      <ProductWrapper>
        {products.map((item) => (
          <ProductCard
            key={item.id}
            id={item.id}
            name={item.brand}
            image={item.image}
            price="Size"
          />
        ))}
      </ProductWrapper>
    </Container>
  );
}

export default Popular;

const Container = styled.div`
  margin-top: 32px;

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
  }

  .category-title {
    font-size: 18px;
    font-weight: 600;
    color: ${(props) => props.theme.colors.black};
  }

  .see-all {
    font-size: 14px;
    color: ${(props) => props.theme.colors.doveGray};
    border: 0;
    background-color: transparent;
  }
`;

const ProductWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  grid-gap: 20px;
`;
