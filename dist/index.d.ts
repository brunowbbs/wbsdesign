/// <reference types="react" />
import { InputHTMLAttributes } from 'react';

interface Props$1 extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
}
declare function TextField(props: Props$1): JSX.Element;

interface ButtonProps$1 {
    text: string;
    onClick: () => void;
}
declare const Button: ({ onClick, text }: ButtonProps$1) => JSX.Element;

interface ButtonProps {
    text: string;
    onClick: () => void;
}
declare const ChakraButton: ({ onClick, text }: ButtonProps) => JSX.Element;

interface Props {
    text: string;
}
declare function App({ text }: Props): JSX.Element;

export { Button, ChakraButton, App as Text, TextField };
