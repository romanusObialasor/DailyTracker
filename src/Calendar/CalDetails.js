import React from "react";
import styled from "styled-components";
import { AiOutlineArrowLeft } from "react-icons/ai";
import Calendar from "react-calendar";
import { Link } from "react-router-dom";

const CalDetails = () => {
  const [value, onChange] = React.useState(new Date());
  console.log("this is it ", value.toString());
  return (
    <Container>
      <Top>
        <TopLeft>
          <Link
            style={{
              color: "white",
            }}
            to="/dashboard/calendar"
          >
            <AiOutlineArrowLeft />
          </Link>
          <span>Excersis Calendar</span>
        </TopLeft>
        <Image src="/images/17.jpg" />
      </Top>
      <Rest>
        {" "}
        <Calendar onChange={onChange} value={value} />
        <Result>
          <Title>Faliures</Title>
          <Ul>
            <Li>{value.toDateString()}</Li>
          </Ul>
        </Result>
      </Rest>
    </Container>
  );
};

export default CalDetails;

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 100%;
  background: #212429;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 320px) {
    /* overflow-x: scroll; */
  }
`;

const Top = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  width: 90%;
  color: white;
  text-decoration: none;
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

const Rest = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

const Result = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;

  @media screen and (max-width: 320px) {
    align-items: ;
  }
`;

const Title = styled.div`
  font-weight: 500;
  font-size: 25px;
  margin-top: 20px;
  font-style: italic;
  color: #ff6b74;
`;

const Ul = styled.ol`
  border-radius: 5px;
  background: white;
  font-size: 13px;
  @media screen and (max-width: 320px) {
    border-radius: 3px;
    width: 250px;
  }
`;

const Li = styled.li`
  width: 320px;
  padding: 20px 0px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  color: black;
  @media screen and (max-width: 320px) {
    width: 200px;
  }
`;

// const Wrapper = styled.div``;
