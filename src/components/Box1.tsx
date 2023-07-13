import { motion } from "framer-motion";
import { useRef } from "react";
import { styled } from "styled-components";

const BiggerBox = styled.div`
  width: 300px;
  height: 300px;
  background-color: rgba(245, 235, 235, 0.4);
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;
const Box = styled(motion.div)`
  width: 100px;
  height: 100px;
  background-color: rgba(245, 235, 235, 1);
  border-radius: 20px;
`;

const boxVariants = {
  hover: { scale: 1.2, rotateZ: 90 },
  click: { scale: 1, borderRadius: "100px" },
  drag: {
    backgroundColor: "rgb(76, 209, 55)",
    transition: { duration: 3 },
  },
};

const Box1 = () => {
  const biggerBoxRef = useRef<HTMLDivElement>(null);
  return (
    <BiggerBox ref={biggerBoxRef}>
      <Box
        drag
        dragSnapToOrigin
        dragElastic={0.5}
        dragConstraints={biggerBoxRef}
        variants={boxVariants}
        whileHover="hover"
        whileTap="click"
        whileDrag="drag"
      ></Box>
    </BiggerBox>
  );
};

export default Box1;
