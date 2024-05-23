"use client";

import styled from "styled-components";

import { ProductType } from "@/lib/types";
import { formatNumber } from "@/lib/constant";

import BottomTab from "./bottom";

type Props = {
  price: number;
  handleSku: (id: string) => void;
  stock?: number;
  currentSku: string | null;
} & ProductType;

function Details(props: Props) {
  return (
    <Container>
      <div className="title-price">
        <div className="title">{props.brand}</div>
        <div className="title price">${formatNumber(props.price)}</div>
      </div>

      <div className="information">
        Origin: {props.origin} | Stock: {props.stock}
      </div>

      <div className="tag-title">Description</div>
      <div className="information">{props.information}</div>

      <div className="tag-title">Size</div>

      <div className="tag-container">
        {props.skus.map((item) => (
          <TagButton
            key={item.code}
            isActive={props.currentSku === item.code}
            onClick={() => props.handleSku(item.code)}
          >
            {item.name}
          </TagButton>
        ))}
      </div>

      <BottomTab />
    </Container>
  );
}

export default Details;

const Container = styled.div`
  padding: 16px;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 16px 16px 0 0;

  .title-price {
    display: flex;
    justify-content: space-between;
  }

  .title {
    font-weight: 600;
    font-size: 24px;
    color: ${(props) => props.theme.colors.black};
  }

  .price {
    color: ${(props) => props.theme.colors.main};
  }

  .tag-title {
    margin-top: 24px;
    font-weight: 500;
    font-size: 16px;
    color: ${(props) => props.theme.colors.black};
  }

  .information {
    margin-top: 8px;
    font-size: 14px;
    color: ${(props) => props.theme.colors.dustyGray};
  }

  .tag-container {
    margin-top: 8px;
    display: flex;
  }
`;

const TagButton = styled.button<{ isActive: boolean }>`
  margin-right: 16px;
  padding: 8px 16px;
  background-color: transparent;
  border: 1px solid
    ${(props) =>
      props.isActive ? props.theme.colors.main : props.theme.colors.dustyGray};
  color: ${(props) =>
    props.isActive ? props.theme.colors.main : props.theme.colors.dustyGray};
  font-size: 14px;
  border-radius: 16px;
  cursor: pointer;
`;
