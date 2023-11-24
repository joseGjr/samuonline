import React from "react";
import * as C from "./styles";
import { MdMessage } from "react-icons/md";

const Default = () => {
  return (
    <C.Container>
      <MdMessage />
      <C.Title>SAMU São Luis- MA</C.Title>
      <C.Info>
        SAMU_MOB acessível com a prioridade de salvar vidas!
      </C.Info>
    </C.Container>
  );
};

export default Default;
