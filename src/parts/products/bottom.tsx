"use client";

import styled from "styled-components";
import Image from "next/image";

import icon_bag from "@/assets/images/icon-bag.svg";

import Button from "@/components/button";

function BottomTab() {
  return (
    <Container>
      <Button className="icon">
        <Image src={icon_bag} width={24} height={24} alt="Icon" />
      </Button>

      <Button>Add to cart</Button>
    </Container>
  );
}

export default BottomTab;

const Container = styled.div`
  position: sticky;
  bottom: 0;
  display: flex;
  justify-content: flex-end;
  margin-top: 24px;

  .icon {
    margin-right: 16px;
    border: 1px solid ${(props) => props.theme.colors.main};
    background-color: transparent;
  }
`;
