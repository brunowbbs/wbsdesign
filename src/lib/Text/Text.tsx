import React from "react";

interface Props {
  text: string;
}

export default function App({ text }: Props) {
  return <h1 className="text-3xl font-bold underline">{text}</h1>;
}
