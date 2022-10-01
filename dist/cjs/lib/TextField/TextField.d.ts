import { InputHTMLAttributes } from "react";
export interface Props extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
}
declare function TextField(props: Props): JSX.Element;
export default TextField;
