/// <reference types="react" />
import { InputHTMLAttributes } from 'react';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
}
declare function TextField(props: Props): JSX.Element;

interface ButtonProps {
    text: string;
    onClick: () => void;
}
declare const Button: ({ onClick, text }: ButtonProps) => JSX.Element;

export { Button, TextField };
