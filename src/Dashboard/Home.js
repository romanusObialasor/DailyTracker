import React from "react";
import { AiOutlineLogout } from "react-icons/ai";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Container>
      <OverLay />
      <Top>
        <Image src="/images/12.jpg" />
        <Text>
          <div>
            Welcome back, <i>Name</i>
          </div>
          <span>let's get creative!</span>
        </Text>
      </Top>
      <Mid>
        <Wrap to="/dashboard/tasks">
          <Room src="/images/todo.png" />
          <span>Task</span>
        </Wrap>
        <Wrap to="/dashboard/notes">
          <Room src="/images/notes.jpg" />
          <span>Notes</span>
        </Wrap>
        <Wrap to="/dashboard/excersis">
          <Room src="/images/10.jpg" />
          <span>Excersis Room</span>
        </Wrap>
        <Wrap to="/dashboard/alarm">
          <Room src="/images/alarm.jpg" />
          <span>Alarm</span>
        </Wrap>
        <Wrap to="/dashboard/meal">
          <Room src="/images/meal3.jpg" />
          <span>Meal tracker</span>
        </Wrap>
        <Wrap to="/dashboard/study">
          <Room src="/images/13.jpeg" />
          <span>Study rooom</span>
        </Wrap>
        <Wrap to="/dashboard/calendar">
          <Room src="/images/cal.jpg" />
          <span>Calendar</span>
        </Wrap>
        <Wrap to="/dashboard/goals">
          <Room src="/images/medal.png" />
          <span>Goals</span>
        </Wrap>
      </Mid>
      <Bottom>
        <AiOutlineLogout
          style={{
            cursor: "pointer",
          }}
        />
      </Bottom>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 100%;
  background: url("/images/bg1.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  position: relative;
`;

const Top = styled.div`
  display: flex;
  width: 90%;
  align-items: center;
  margin-top: 10px;
  z-index: 1;
  @media screen and (max-width: 425px) {
    flex-direction: column;
    text-align: center;
  }
`;

const Image = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 60px;
  outline: 2px solid white;
  object-fit: cover;
`;

const Text = styled.div`
  color: white;
  margin-left: 10px;
  div {
    font-size: 40px;
    font-weight: 500;
    @media screen and (max-width: 425px) {
      font-size: 30px;
    }
    @media screen and (max-width: 320px) {
      font-size: 25px;
    }
  }
  span {
    font-size: 25px;
    @media screen and (max-width: 425px) {
      font-size: 20px;
    }
  }
  @media screen and (max-width: 425px) {
    margin-left: 0;
  }
`;

const Mid = styled.div`
  width: 50vw;
  min-height: 70vh;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  flex-wrap: wrap;
  @media screen and (max-width: 768px) {
    width: 80%;
  }
  @media screen and (max-width: 400px) {
    width: 100%;
  }
`;

const Wrap = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px;
  color: white;
  text-decoration: none;
  span {
    margin-top: 10px;
  }
`;

const Room = styled.img`
  width: 100px;
  height: 100px;
  background: white;
  border-radius: 10px;
  object-fit: cover;
  transition: 350ms;
  cursor: pointer;
  :hover {
    box-shadow: rgb(0 0 0 / 29%) 0px 26px 30px -10px,
      rgb(0 0 0 / 43%) 0px 16px 10px -10px;
    transform: scale(1.05);
  }
  @media screen and (max-width: 320px) {
    width: 90px;
    height: 90px;
  }
`;

const OverLay = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  position: absolute;
`;

const Bottom = styled.div`
  width: 90%;
  z-index: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 30px;
  margin-bottom: 10px;
`;
