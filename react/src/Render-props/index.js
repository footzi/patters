import React from "react";
import styled from "styled-components";

const elements = [
  {
    id: "1",
    label: "hello",
  },
  {
    id: "2",
    label: "test",
  },
];

export const App = ({ ItemList }) => {
  return (
    <ul>
      {elements.map((props) => (
        <ItemList key={props.id} {...props} />
      ))}
    </ul>
  );
};

export const NoCoolItemList = ({ label }) => {
  return <RedItem>{label}</RedItem>;
};

export const CoolItemList = ({ label }) => {
  return <BlueItem>{label}</BlueItem>;
};

export const RenderProps = () => {
  return (
    <>
      <App ItemList={NoCoolItemList} />
      <App ItemList={CoolItemList} />
    </>
  );
};

const RedItem = styled.li`
  color: red;
`;

const BlueItem = styled.li`
  color: blue;
`;
