import React from "react";
import styled from "styled-components";

function SlotItem({ product, coin, onOk }) {
  const { productImageUrl, name, price } = product;

  return (
    <DivBox
      onClick={() => {
        if (price > coin){
          alert("It looks like you don't have enough money. Load some balance.")
          return;
        };
        onOk(price);
      }}
    >
      <Img src={productImageUrl} />
      <ProductName>{name}</ProductName>
      <DivPrice>
        Price: <span>${price}</span>{" "}
      </DivPrice>
      <ProductStatus available={name && coin >= price}>
        {coin >= price ? "Buy Now" : `Load $${price} more`}
      </ProductStatus>
    </DivBox>
  );
}
export default SlotItem;

const DivBox = styled.div`
  border: 1px solid #c4c4c4;
  border-radius: 3px;
  width: 22%;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  transition: all .3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 7px 15px rgb(0 0 0 / 25%);
    border: 1px solid rgba(0,0,0,.15);
    z-index: 1;
  }
`;
const Img = styled.img`
  max-width: 150px;
  margin: auto;
`;

const ProductName = styled.div`
  font-size: 1.2rem;
  text-align: center;
  font-weight: 500;
  margin-top: 0.5rem;
`;
const DivPrice = styled.div`
  text-align: center;
  margin-bottom: 0.5rem;

  span {
    font-weight: bold;
  }
`;

const ProductStatus = styled.div`
  background-color: ${(props) => (props.available ? "#337ab7" : "#d9edf7")};
  max-width: 100%;
  color: ${(props) => (props.available ? "#fff" : "#23527c")};
  padding: 0.5rem 0.5rem;
  text-align: center;

  &:hover {
    /* cursor: ${(props) => (props.available ? "pointer" : "arrow")}; */
  }
`;
