import styled from "styled-components";

export const ContainerHeader = styled.div`
  height: 70px;
  width: 100%;
  background: #24292e;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 100px;
  padding-right: 100px;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  align-self: left;
`;

export const TextNav = styled.p`
  color: white;
  font-size: 18px;
  margin: 10px;
  cursor: pointer;
`;

export const Button = styled.button`
  height: 35px;
  width: 80px;
  border-radius: 5px;
  border: solid 1px white;
  color: white;
  background: transparent;
  margin: 10px;
  font-size: 18px;
  cursor: pointer;
`;

export const Input = styled.input`
  height: 35px;
  border-radius: 5px;
  font-size: 18px;
  background: rgba(255, 255, 255, 0.2);
  border: none;
  padding: 10px;
  color: white;
  ::placeholder {
    color: white;
  }
`;
