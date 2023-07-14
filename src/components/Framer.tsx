import { styled } from "styled-components";
import Box1 from "./Box1";
import Box2 from "./Box2";
import Box3 from "./Box3";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-auto-flow: row;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  background: linear-gradient(135deg, #e09, #d0e);
`;

const Framer = () => {
  return (
    <Wrapper>
      <Box1 />
      <Box2 />
      <Box3 />
    </Wrapper>
  );
};

export default Framer;
