import styled from "styled-components";
import { FaRegSquareCheck, FaTrashCan } from "react-icons/fa6";

export const Container = styled.div`
  background: linear-gradient(90deg, #383838 0%, #000000 81.25%);
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ToDoList = styled.div`
  background: white;
  padding: 30px 20px;
  border-radius: 5px;

  ul {
    padding: 0;
    margin-top: 60px;
  }
`;

export const Input = styled.input`
  border: 2px solid rgba(209, 211, 212, 0.4);
  border-radius: 5px;
  height: 40px;
  margin-right: 20px;
  width: 360px;
`;

export const Button = styled.button`
  background: #5052ec;
  border-radius: 5px;
  font-size: 17px;
  line-height: 2px;
  height: 40px;
  border: none;
  color: #fff;
  width: 130px;
  cursor: pointer;

  &:hover{
    opacity:0.8;
  }

  &:active{
    opacity:0.5;
  }
`;

export const ListItem = styled.div`
  background-color: ${(props) => (props.$isFinished ? "#80ff00" : "#e4e4e4")};
  box-shadow: 1px 4px 10xp rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  padding: 0 10px;
  width: 500px;

  li {
    list-style-type: none;
  }
`;

export const Trash = styled(FaTrashCan)`
    cursor:pointer;
`;
export const Check = styled(FaRegSquareCheck)`
    cursor:pointer;
`;
