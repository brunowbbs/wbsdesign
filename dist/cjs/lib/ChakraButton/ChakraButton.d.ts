/// <reference types="react" />
interface ButtonProps {
    text: string;
    onClick: () => void;
}
declare const ChakraButton: ({ onClick, text }: ButtonProps) => JSX.Element;
export default ChakraButton;
