import styled from "styled-components";
import Image from "next/image";
import { useRouter } from "next/navigation";

import plus from "@/assets/images/plus.svg";

import Button from "@/components/button";

import { createSlug } from "@/lib/constant";

type Props = {
  name: string;
  image: string;
  price: string;
  id: number;
};

function ProductCard({ name, image, price, id }: Props) {
  const router = useRouter();
  const slug = createSlug(id, name);

  return (
    <Container onClick={() => router.push(`${slug}`)}>
      <div style={{ padding: "8px" }}>
        <span className="name">{name}</span>
        <Image
          src={image}
          width={120}
          height={120}
          alt="Icon"
          style={{ margin: "12px 0", objectFit: "contain" }}
        />
      </div>

      <div className="bottom-container">
        <span className="name">{price}</span>

        <Button className="button">
          <Image src={plus} width={20} height={20} alt="Icon" />
        </Button>
      </div>
    </Container>
  );
}

export default ProductCard;

const Container = styled.button`
  background-color: ${(props) => props.theme.colors.white};
  border: 0;
  border-radius: 8px 20px 8px 8px;
  cursor: pointer;

  .name {
    margin: 8px;
    font-size: 16px;
    color: ${(props) => props.theme.colors.black};
  }

  .bottom-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .button {
    border-radius: 8px 0 8px 0;
  }
`;
