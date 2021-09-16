import React, { useState } from "react";
import styled from "styled-components";
import Machine from "./components/Products";
import InputCoin from "./components/InputCoin";

function App() {
  const [coin, setCoin] = useState(0);
  const onCoinChanged = (total) => {
    setCoin(total);
  };
  const onOk = (price) => {
    setCoin(coin - price);
  };
  return (
    <Container>
      <h1>Vending Machine </h1>
      <Content>
        <Machine coin={coin} onOk={onOk} />
        <InputCoin coin={coin} onCoinChanged={onCoinChanged} />
      </Content>
    </Container>
  );
}

export default App;
const Container = styled.div`
  max-width: 1300px;
  margin: 0 auto;

  h1 {
    text-align: center;
    margin: 2rem 0;
    font-size: 36px;
    font-weight: 500;
    color: #3b3b3b;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
