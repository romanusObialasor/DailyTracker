import React from "react";
import styled from "styled-components";
import { BiMicrophone, BiMicrophoneOff } from "react-icons/bi";

const AddNote = ({ onToggle }) => {
  const [change, setChange] = React.useState(false);
  const onChanger = () => {
    setChange(!change);
  };
  return (
    <Container>
      <Wrapper>
        <Cancel onClick={onToggle}>x</Cancel>
        <Title>Add A Note</Title>
        {change ? (
          <BiMicrophoneOff
            style={{
              marginTop: "20px",
              color: "#397ef6",
              fontSize: "20px",
              cursor: "pointer",
            }}
            onClick={onChanger}
          />
        ) : (
          <BiMicrophone
            style={{
              marginTop: "20px",
              color: "#397ef6",
              fontSize: "20px",
              cursor: "pointer",
            }}
            onClick={onChanger}
          />
        )}
        <Inputs>
          <Input placeholder="click on mic and say `note to self`" />
        </Inputs>
        <Button
          onClick={() => {
            onToggle();
          }}
        >
          {" "}
          Done
        </Button>
      </Wrapper>
    </Container>
  );
};

export default AddNote;

const Container = styled.div`
  position: absolute;
  height: 100vh;
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(2px);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 320px;
  height: auto;
  background: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  color: black;
  padding-bottom: 10px;
  @media screen and (max-width: 320px) {
    width: 300px;
  }
`;

const Title = styled.div`
  margin-top: 40px;
  font-weight: 500;
  font-size: 20px;
`;

const Inputs = styled.div`
  margin-top: 10px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.textarea`
  width: 80%;
  height: 35px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 5px;
  padding-left: 5px;
  margin-top: 20px;
  outline: none;
`;

const Button = styled.div`
  margin-top: 40px;
  padding: 10px 20px;
  background: #397ef6;
  color: white;
  cursor: pointer;
  border-radius: 5px;
`;

const Cancel = styled.div`
  position: absolute;
  right: 15px;
  top: 10px;
  cursor: pointer;
  font-size: 20px;
`;
