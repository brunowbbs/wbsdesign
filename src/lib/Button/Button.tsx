import { Button as ButtonAntd } from "antd";

import React from "react";

interface ButtonProps {
  text: string;
  onClick: () => void;
}

const Button = ({ onClick, text }: ButtonProps) => (
  <ButtonAntd onClick={onClick} type="primary">
    {text}
  </ButtonAntd>
);

export default Button;
