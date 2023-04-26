import { width } from "@mui/system";
import React from "react";
import styled from "styled-components";
import logo from "../img/header/pkkb.png";

export function ComponentsHeader() {
  return (
    <div className="Header">
      <Wrapper>
        <Container>
          <Header>
            <img src={logo} width="76px" height="100px" alt="Logo"></img>
            <HeaderText>
              Государственное бюджетное учреждение здравоохранения
            </HeaderText>
          </Header>
        </Container>
      </Wrapper>
    </div>
  );
}
const HeaderText = styled.p`
  padding-left: 20px;
  font-family: "Times New Roman", Times, serif;
  font-size: 20px;
`;

const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 120px;
  top: 0;
  background: rgb(255, 255, 255);
  left: 0;
  position: fixed;
`;

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 120px;
  //background-color: red;
`;

const Header = styled.div`
  padding-left: 80px;
  display: flex;
  width: 100%;
  height: 120px;
  /* background-color: red; */
  align-items: center;
`;
