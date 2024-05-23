"use client";

import { useState, useEffect } from "react";
import styled from "styled-components";
import Image from "next/image";

import BaseContainer from "@/components/container";

import { getProduct, getStockPrice } from "@/api/products";
import { ProductType, PriceStock } from "@/lib/types";

import Header from "@/parts/products/header";
import Details from "@/parts/products/details";

function ProductDetails({ params }: { params: { slug: string } }) {
  const [product, setProduct] = useState<ProductType | null>(null);
  const [priceStock, setPriceStock] = useState<PriceStock | null>(null);
  const [sku, setSku] = useState<string | null>(null);

  const [number] = params.slug.split("-");

  useEffect(() => {
    async function fetchData() {
      const { data } = await getProduct(Number(number));
      setProduct(data);
      setSku(data.skus[0].code);
    }

    number && fetchData();
  }, [number]);

  useEffect(() => {
    async function getPriceStock() {
      const { data } = await getStockPrice(Number(sku));
      setPriceStock(data);
    }

    const intervalId = setInterval(() => {
      sku && getPriceStock();
    }, 5000);

    sku && getPriceStock();
    return () => clearInterval(intervalId);
  }, [sku]);

  return (
    <Container>
      <Header />

      {product && (
        <>
          <div className="image-container">
            <Image
              src={product.image}
              width={240}
              height={240}
              alt="Icon"
              style={{ objectFit: "contain" }}
            />
          </div>

          <Details
            {...product}
            price={Number(priceStock?.price)}
            stock={priceStock?.stock}
            currentSku={sku}
            handleSku={setSku}
          />
        </>
      )}
    </Container>
  );
}

export default ProductDetails;

const Container = styled(BaseContainer)`
  padding: 16px;
  padding-bottom: 0;

  .image-container {
    margin: 24px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: transparent;
  }
`;
