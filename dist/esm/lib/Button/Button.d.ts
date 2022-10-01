/// <reference types="react" />
interface ButtonProps {
    text: string;
    onClick: () => void;
}
declare const Button: ({ onClick, text }: ButtonProps) => JSX.Element;
export default Button;
