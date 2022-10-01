import React from "react";
import { Button as ButtonAntd } from "antd";

export interface Props {
  text: string;
  onClick: () => void;
}

function Button(props: Props) {
  return (
    <ButtonAntd type="primary" onClick={props.onClick}>
      {props.text}
    </ButtonAntd>
  );
}

export default Button;
