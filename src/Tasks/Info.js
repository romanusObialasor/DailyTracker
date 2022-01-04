import React from "react";
import styled from "styled-components";
import { AiFillCaretDown } from "react-icons/ai";

const Info = ({ text }) => {
  return (
    <Container>
      <Wrapper>{text}</Wrapper>
      <AiFillCaretDown
        style={{
          color: "black",
          bottom: "0",
          marginTop: "-5px",
          zIndex: "1",
        }}
      />
    </Container>
  );
};

export default Info;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: max-content;
  color: rgba(252, 252, 252, 0.6);
  transition: all cubic-bezier(0.175, 0.885, 0.32, 1.275) 350ms;
  cursor: pointer;
  position: absolute;
  :hover {
    display: none;
  }
`;

const Wrapper = styled.div`
  padding: 5px 10px;
  background: black;
  font-size: 12px;
  border-radius: 3px;
`;
