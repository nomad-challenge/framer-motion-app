import {
  AnimatePresence,
  motion,
  useMotionValue,
  useScroll,
  useTransform,
} from "framer-motion";
import { useEffect, useState } from "react";
import { styled } from "styled-components";

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 200px 200px;
  grid-template-columns: 300px 300px;
  gap: 10px;
`;
const Box = styled(motion.div)`
  width: 300px;
  height: 200px;
  background-color: rgba(245, 235, 235, 1);
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Circle = styled(motion.div)`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  background-color: rgb(255, 0, 0);
`;

const Button = styled(motion.button)`
  width: 100px;
  height: 50px;
  font-weight: 600;
  border: none;
`;

const scaleVar = {
  init: { scale: 1 },
  hover: { scale: 1.1 },
};

const Box3 = () => {
  const [clicked, setClicked] = useState(false);
  const cli = useMotionValue(0);
  const color = useTransform(
    cli,
    [1, 0],
    ["rgb(81, 0, 255)", "rgb(255, 0, 0)"]
  );
  const toggle = () => {
    setClicked((prev) => !prev);
    cli.set(clicked ? 0 : 1);
    // clicked.set(true);
  };

  return (
    <>
      <Wrapper>
        <Box variants={scaleVar} initial="init" whileHover="hover"></Box>
        <Box>{!clicked ? <Circle layoutId="circle" /> : null}</Box>
        <Box>{clicked ? <Circle layoutId="circle" /> : null}</Box>
        <Box variants={scaleVar} initial="init" whileHover="hover"></Box>
        <Button layout style={{ color }} onClick={toggle}>
          Switch
        </Button>
      </Wrapper>
    </>
  );
};

export default Box3;
