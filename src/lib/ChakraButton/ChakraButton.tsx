import { Button } from "@chakra-ui/react";

import React from "react";

interface ButtonProps {
  text: string;
  onClick: () => void;
}

const ChakraButton = ({ onClick, text }: ButtonProps) => (
  <Button colorScheme="blue" onClick={onClick}>
    {text}
  </Button>
);

export default ChakraButton;
