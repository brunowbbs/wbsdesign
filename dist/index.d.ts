/// <reference types="react" />
import { InputHTMLAttributes } from 'react';

interface Props$1 extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
}
declare function TextField(props: Props$1): JSX.Element;

interface Props {
    text: string;
    onClick: () => void;
}
declare function Button(props: Props): JSX.Element;

export { Button, TextField };
