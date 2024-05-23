"use client";

import styled from "styled-components";
import Image from "next/image";

import user_image from "@/assets/images/user.jpg";
import menu_icon from "@/assets/images/menu-icon.svg";

import Button from "@/components/button";

function Header() {
  return (
    <Container>
      <Button className="icon-button">
        <Image src={menu_icon} width={20} height={20} alt="Icon" />
      </Button>

      <Image
        src={user_image}
        width={40}
        height={40}
        alt="Picture of the author"
        style={{ borderRadius: "50%" }}
      />
    </Container>
  );
}

export default Header;

const Container = styled.div`
  display: flex;
  justify-content: space-between;

  .icon-button {
    background-color: ${(props) => props.theme.colors.white};
  }
`;
