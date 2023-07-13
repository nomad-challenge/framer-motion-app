import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";
import { styled } from "styled-components";

const Box = styled(motion.div)`
  width: 100px;
  height: 100px;
  background-color: rgba(245, 235, 235, 1);
  border-radius: 20px;
`;

const Box2 = () => {
  const x = useMotionValue(0);
  const scale = useTransform(x, [-200, 0, 200], [2, 1, 0.1]);
  console.log(x);
  useEffect(() => {
    // x.onChange(() => console.log(x.get()));
    // scale.onChange(() => console.log(scale.get()));
  }, [scale]);
  return <Box style={{ x, scale }} drag="x" dragSnapToOrigin></Box>;
};

export default Box2;
