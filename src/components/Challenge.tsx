import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { styled } from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  background: linear-gradient(135deg, #e09, #d0e);
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 10px;
`;
const Box = styled(motion.div)`
  width: 200px;
  height: 100px;
  background-color: #fff;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(198, 189, 189, 0.4);
`;

const Circle = styled(motion.div)`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background-color: white;
`;

const Button = styled(motion.button)`
  border: none;
  border-radius: 6px;
  padding: 12px 24px;
  margin-top: 40px;
  cursor: pointer;
  font-weight: 600;
`;

const OverLay = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const scaleVar = {
  init: { scale: 1 },
  hover: { scale: 1.1 },
};

const Challenge = () => {
  const [clicked, setClicked] = useState(false);
  const [clickedBox, setClickedBox] = useState<string | null>(null);
  const toggleSwitch = () => {
    setClicked((prev) => !prev);
  };

  const onBoxClick = (boxLayoutId: string) => {
    setClickedBox(boxLayoutId);
  };
  const btnVar = {
    init: { scale: 1, color: "rgb(81, 0, 255)" },
    animate: {
      scale: clicked ? 1.2 : 1,
      color: clicked ? "rgb(255, 0, 0)" : "rgb(81, 0, 255)",
    },
  };

  return (
    <Container>
      <Grid>
        <Box
          onClick={() => onBoxClick("box1")}
          variants={scaleVar}
          initial="init"
          whileHover="hover"
          layoutId="box1"
          style={{ transformOrigin: "right bottom" }}
        />
        <Box>{!clicked ? <Circle layoutId="circle" /> : null}</Box>
        <Box>{clicked ? <Circle layoutId="circle" /> : null}</Box>
        <Box
          onClick={() => onBoxClick("box4")}
          variants={scaleVar}
          initial="init"
          whileHover="hover"
          layoutId="box4"
          style={{ transformOrigin: "left top" }}
        />
      </Grid>
      <Button
        onClick={toggleSwitch}
        variants={btnVar}
        initial="initial"
        animate="animate"
      >
        Switch
      </Button>
      <AnimatePresence>
        {clickedBox ? (
          <OverLay
            onClick={() => setClickedBox(null)}
            initial={{ background: "rgba(0,0,0,0)" }}
            animate={{ background: "rgba(0,0,0,0.3)" }}
            exit={{ background: "rgba(0,0,0,0)" }}
          >
            <Box
              style={{
                backgroundColor: "white",
              }}
              layoutId={clickedBox}
            />
          </OverLay>
        ) : null}
      </AnimatePresence>
    </Container>
  );
};

export default Challenge;
