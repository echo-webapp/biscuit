import React, { useState } from "react";
import PopupSkeleton from "./popupSkeleton";
import styled from "styled-components";
import Dialog from "@mui/material/Dialog";
import Close from "../assets/close";
import PriceFrame from "../assets/PriceFrame.png";
const MainContainer = styled.div`
  width: 1266px;
  height: 913px;
  background: #ffffff;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;
const SubContainer = styled.div`
  position: absolute;
  left: 20px;
  top: 20px;
  cursor: pointer;
`;
const Price = ({ open, setOpen }) => {
  return (
    <Dialog
      onClose={() => {
        setOpen(false);
      }}
      open={open}
      maxWidth={"1266px"}
    >
      <MainContainer>
        <img src={PriceFrame} style={{ height: "850px", width: "1200px" }} />
        <SubContainer
          onClick={() => {
            setOpen(false);
          }}
        >
          <Close />
        </SubContainer>
      </MainContainer>
    </Dialog>
  );
};

export default Price;
