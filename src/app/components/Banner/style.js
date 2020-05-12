import styled from "styled-components";

export const ContainerBanner = styled.div`
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: solid 1px #cfd8dc;
  margin: 20px;
  border-radius: 5px;
`;

export const Title = styled.p`
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const Description = styled.p`
  font-size: 16px;
  margin-bottom: 10px;
`;

export const Button = styled.button`
  height: 35px;
  background: green;
  color: white;
  font-weigth: bold;
  font-size: 14px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
