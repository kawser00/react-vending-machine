import React, { useState } from "react";
import styled from "styled-components";
import SlotItem from "./SlotItem";
import { products } from "../data";


function Products({ coin, onOk }) {
  const [productList] = useState(products);
  return (
    <ProductContainer>
      {productList &&
        productList.map(p => {
          return <SlotItem key={p.id} product={p} coin={coin} onOk={onOk} />;
        })}
    </ProductContainer>
  );
}
export default Products;

const ProductContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;
`;