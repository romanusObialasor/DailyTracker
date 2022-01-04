import React from "react";
import styled from "styled-components";
import { AiOutlineArrowLeft, AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import AddNote from "./AddNote";

const Notes = () => {
  const [toggle, setToggle] = React.useState(false);

  const onToggle = () => {
    setToggle(!toggle);
  };
  return (
    <Container>
      {toggle ? <AddNote onToggle={onToggle} /> : null}

      <Top>
        <TopLeft>
          <Link
            to="/dashboard"
            style={{
              color: "black",
            }}
          >
            <AiOutlineArrowLeft />
          </Link>
          <span>Notes</span>
        </TopLeft>
        <Image src="/images/7.jpg" />
      </Top>
      <Second>
        <Add onClick={onToggle}>+</Add>
      </Second>
      <Mid>
        <Hold>
          <NoteHolder>
            Note that the development build is not optimized. To create a
            production build, use npm run build.{" "}
            <AiFillDelete color="red" cursor="pointer" />
          </NoteHolder>
        </Hold>
      </Mid>
    </Container>
  );
};

export default Notes;

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 100%;
  /* background: #212429; */
  background: #efd551;
  color: black;
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
    @media screen and (max-width: 452px) {
      margin-left: 10px;
    }
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
  justify-content: center;
  align-items: center;
  width: 90%;
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

const Hold = styled.ul``;

const NoteHolder = styled.li`
  padding: 20px 0px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.5);
  @media screen and (min-width: 768px) {
    width: 600px;
  }
  @media screen and (max-width: 320px) {
    margin-right: 10px;
    padding: 10px 0px;
  }
`;

// const Mid = styled.div``

// const Mid = styled.div``

// const Mid = styled.div``

// const Mid = styled.div``

// const Mid = styled.div``

// const Mid = styled.div``

// const Mid = styled.div``
