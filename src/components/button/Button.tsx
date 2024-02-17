import { FC } from "react";

interface ButtonProps {
    label: string;
}

const Button: FC<ButtonProps> = (props) => {
    const { label } = props;
    return <div className="p-2">{label}</div>;
};

export default Button;
