import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Framer = () => {
  return (
    <Container>
      <motion.h2
        animate={{
          opacity: 1,
          x: 0,
        }}
        initial={{
          opacity: 0,
          x: "100vw",
        }}
        transition={{
          // delay: 1,
          duration: 1,
          type: "spring",
          stiffness: 10,
        }}
      >
        Romanus
      </motion.h2>
    </Container>
  );
};

export default Framer;

const Container = styled.div`
  background: black;
  color: white;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
