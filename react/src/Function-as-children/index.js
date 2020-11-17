import React from "react";
import styled from "styled-components";

export const MicroApp = ({ children }) => {
  return children(<header>Function As Children</header>);
};

export const App = () => {
  return (
    <div>
      <MicroApp>{(header) => <LeftContent>{header}</LeftContent>}</MicroApp>
    </div>
  );
};

export const App2 = () => {
  return (
    <div>
      <MicroApp>{(header) => <RightContent>{header}</RightContent>}</MicroApp>
    </div>
  );
};

export const FunctionAsChildren = () => {
  return (
    <>
      <App />
      <App2 />
    </>
  );
};

const LeftContent = styled.div`
  text-align: left;
`;

const RightContent = styled.div`
  text-align: right;
`;
