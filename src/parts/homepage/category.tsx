"use client";

import styled from "styled-components";
import Image from "next/image";
import { useState } from "react";

import Button from "@/components/button";

import { categories } from "@/lib/constant";
import { CategoryType } from "@/lib/types";

const allCategories: CategoryType[] = [{ id: 0, name: "All" }, ...categories];

function Category() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>(
    allCategories[0]
  );

  return (
    <Container>
      <div className="container">
        <span className="category-title">Drink Category</span>
        <button className="see-all">See all</button>
      </div>

      <CategoryContainer>
        {allCategories.map((item) => (
          <Button
            key={item.id}
            className={
              item.id === selectedCategory.id
                ? "selected-option"
                : "unselected-option"
            }
            onClick={() => setSelectedCategory(item)}
          >
            <>
              {item.icon && (
                <Image
                  src={item.icon}
                  width={20}
                  height={20}
                  alt="Icon"
                  style={{ marginRight: "8px" }}
                />
              )}
              {item.name}
            </>
          </Button>
        ))}
      </CategoryContainer>
    </Container>
  );
}

export default Category;

const Container = styled.div`
  margin-top: 32px;

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
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

const CategoryContainer = styled.div`
  display: flex;
  margin-top: 12px;

  .unselected-option {
    margin-right: 8px;
    background-color: ${(props) => props.theme.colors.white};
    color: ${(props) => props.theme.colors.black};
  }

  .selected-option {
    margin-right: 8px;
    background-color: ${(props) => props.theme.colors.main};
    color: ${(props) => props.theme.colors.white};
  }
`;
