import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import styled from "styled-components";
import Checkbox from "@mui/material/Checkbox";
import { AiFillDelete } from "react-icons/ai";
import AddTask from "./AddTask";
import { Link } from "react-router-dom";

const Task = () => {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const [change, setChange] = React.useState(false);
  const [toggle, setToggle] = React.useState(false);

  const onToggle = () => {
    setToggle(!toggle);
  };
  return (
    <Container>
      {toggle ? <AddTask onToggle={onToggle} /> : null}

      <Top>
        <TopLeft>
          <Link
            style={{
              color: "white",
            }}
            to="/dashboard"
          >
            <AiOutlineArrowLeft />
          </Link>
          <span>Task</span>
        </TopLeft>
        <Image src="/images/5.jpg" />
      </Top>
      <Second>
        <SecondLeft>
          Monday (<span>2</span>)
        </SecondLeft>
        <Add onClick={onToggle}>+</Add>
      </Second>
      <Details>
        <span>Task</span>
        <span>Due time</span>
        <div>
          <span
            style={{
              marginRight: "40px",
            }}
          >
            Complete
          </span>
          <span>Remove</span>
        </div>
      </Details>
      <Mid>
        {change ? (
          <TaskBar bg>
            <span>Task</span>
            <span>Due time</span>
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  marginRight: "55px",
                }}
              >
                <Checkbox
                  {...label}
                  onChange={(e) => {
                    setChange(!change);
                  }}
                />
              </span>
              <span
                style={{
                  marginRight: "15px",
                }}
              >
                <AiFillDelete color="red" cursor="pointer" />
              </span>
            </div>
          </TaskBar>
        ) : (
          <TaskBar>
            <span>Task</span>
            <span>Due time</span>
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  marginRight: "55px",
                }}
              >
                <Checkbox
                  {...label}
                  onChange={(e) => {
                    setChange(!change);
                  }}
                />
              </span>
              <span
                style={{
                  marginRight: "15px",
                }}
              >
                <AiFillDelete color="red" cursor="pointer" />
              </span>
            </div>
          </TaskBar>
        )}
      </Mid>
    </Container>
  );
};

export default Task;

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 100%;
  background: #212429;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Top = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  width: 90%;
`;

const TopLeft = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
  span {
    margin-left: 20px;
  }
`;

const Image = styled.img`
  background: gray;
  height: 70px;
  width: 70px;
  border-radius: 35px;
  outline: 2px solid white;
  object-fit: cover;
`;

const Second = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
`;

const SecondLeft = styled.div`
  span {
    font-size: 10px;
    margin: 3px;
  }
`;

const Add = styled.div`
  margin-right: 25px;
  font-size: 30px;
  cursor: pointer;
`;

const Mid = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
  @media screen and (max-width: 425px) {
    width: 90%;
  }
`;

const Details = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  align-items: center;
  span {
    font-size: 12px;
    color: rgba(252, 252, 252, 0.6);
  }
`;

const TaskBar = styled.div`
  width: 80%;
  min-height: 70px;
  height: 100%;
  background: ${({ bg }) => (bg ? "#d3ffb5" : "white")};
  border-radius: 5px;
  color: black;
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  align-items: center;
  padding: 0px 40px;
  @media screen and (max-width: 425px) {
    width: 90%;
    padding: 0px 20px;
  }

  span {
    font-size: 12px;
    @media screen and (max-width: 425px) {
      max-width: 30px;
    }
  }
`;

// const Top = styled.div``;

// const Top = styled.div``;

// const Top = styled.div``;

// const Top = styled.div``;

// const Top = styled.div``;

// const Top = styled.div``;

// const Top = styled.div``;

// const Top = styled.div``;

// const Top = styled.div``;

// const Top = styled.div``;

// const Top = styled.div``;
