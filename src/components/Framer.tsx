import { styled } from "styled-components";
import { motion } from "framer-motion";
import { useRef } from "react";
import Box1 from "./Box1";
import Box2 from "./Box2";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-auto-flow: row;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
`;

const Framer = () => {
  return (
    <Wrapper>
      <Box1 />
      <Box2 />
    </Wrapper>
  );
};

export default Framer;
