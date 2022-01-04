import React from "react";
import styled from "styled-components";
import { Rating } from "react-simple-star-rating";
import { AiOutlineArrowLeft, AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";

const Goals = () => {
  const [toggle, setToggle] = React.useState(false);
  const [rating, setRating] = React.useState(0);
  console.log(rating);

  const onToggle = () => {
    setToggle(!toggle);
  };

  const handleRating = (rate: number) => {
    setRating(rate);
  };
  return (
    <Container>
      {/* {toggle ? <AddACal onToggle={onToggle} /> : null} */}
      <Top>
        <TopLeft>
          {" "}
          <Link
            style={{
              color: "gold",
            }}
            to="/dashboard"
          >
            <AiOutlineArrowLeft />
          </Link>
          <span>Goals</span>
        </TopLeft>
        <Image src="/images/17.jpg" />
      </Top>
      <Second>
        <SecondLeft>
          Goals (<span>2</span>)
        </SecondLeft>
        <Add onClick={onToggle}>+</Add>
      </Second>
      <Wrapper>
        <GoalBar>
          <MyGoal> MyGoal</MyGoal>
          <Time>Due Date</Time>
          <Star>
            <Rating
              onClick={handleRating}
              ratingValue={rating} /* Available Props */
              size="15"
            />
          </Star>
          <span>
            <AiFillDelete />
          </span>
        </GoalBar>
      </Wrapper>
    </Container>
  );
};

export default Goals;

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 100%;
  background: #212429;
  color: gold;
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
  outline: 2px solid gold;
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

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const GoalBar = styled.div`
  min-height: 70px;
  height: auto;
  flex-wrap: wrap;
  background: white;
  width: 80%;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: black;
  font-size: 13px;
  color: rgba(0, 0, 0, 0.8);
  span {
    color: red;
    cursor: pointer;
  }
`;

const MyGoal = styled.div``;

const Time = styled.div``;

const Star = styled.div``;

// const Wrapper = styled.div``;

// const Wrapper = styled.div``;

// const Wrapper = styled.div``;
