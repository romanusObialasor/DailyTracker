import React from "react";
import styled from "styled-components";
import { AiOutlineArrowLeft, AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import AddACal from "./AddACal";

const MyCalender = () => {
  const [toggle, setToggle] = React.useState(false);

  const onToggle = () => {
    setToggle(!toggle);
  };
  return (
    <Container>
      {toggle ? <AddACal onToggle={onToggle} /> : null}
      <Top>
        <TopLeft>
          {" "}
          <Link
            style={{
              color: "white",
            }}
            to="/dashboard"
          >
            <AiOutlineArrowLeft />
          </Link>
          <span>Calendar</span>
        </TopLeft>
        <Image src="/images/17.jpg" />
      </Top>
      <Second>
        <SecondLeft>
          Calendars (<span>2</span>)
        </SecondLeft>
        <Add onClick={onToggle}>+</Add>
      </Second>
      <Mid>
        <Link
          to="/dashboard/calendar/id"
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            textDecoration: "none",
          }}
        >
          <Cal>
            <Li>Excersis Calendar</Li>
            <span>
              <AiFillDelete />
            </span>
          </Cal>
        </Link>
      </Mid>
    </Container>
  );
};

export default MyCalender;

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
`;

const Cal = styled.ul`
  background: white;
  color: black;
  width: 80%;
  height: 60px;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: 350ms;

  :hover {
    background: #c4d4ff;
  }

  span {
    cursor: pointer;
    color: red;
    margin-right: 10px;
    transition: 350ms;
  }
`;

const Li = styled.li``;
