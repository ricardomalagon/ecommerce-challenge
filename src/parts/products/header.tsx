"use client";

import styled from "styled-components";
import Image from "next/image";
import { useRouter } from "next/navigation";

import icon_back from "@/assets/images/icon-back.svg";
import icon_dots from "@/assets/images/icon-dots.svg";

import Button from "@/components/button";

function Header() {
  const router = useRouter();

  return (
    <Container>
      <Button className="icon-button" onClick={() => router.back()}>
        <Image src={icon_back} width={20} height={20} alt="Icon" />
      </Button>

      <div className="title">Detail</div>

      <Button className="icon-button">
        <Image src={icon_dots} width={20} height={20} alt="Icon" />
      </Button>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  .title {
    font-size: 18px;
    color: ${(props) => props.theme.colors.black};
  }

  .icon-button {
    background-color: ${(props) => props.theme.colors.white};
  }
`;
