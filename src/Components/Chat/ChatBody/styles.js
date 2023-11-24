import styled from "styled-components";

export const Container = styled.div`
  flex: 10;
  background-color: #efeae2;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 10px;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: rgba(0, 0, 0, 0.2);
  }
`;
