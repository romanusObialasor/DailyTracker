import React from "react";
import styled from "styled-components";
import MealPlan from "./MealPlan";

const MealHome = () => {
  return (
    <Container>
      <MealPlan />
    </Container>
  );
};

export default MealHome;

const Container = styled.div``;
