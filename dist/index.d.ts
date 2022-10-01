import React, { InputHTMLAttributes } from 'react';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
}
declare function TextField(props: Props): JSX.Element;

declare const Button: React.FC;

export { Button, TextField };
