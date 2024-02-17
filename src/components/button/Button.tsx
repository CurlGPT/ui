import { ButtonHTMLAttributes, FC } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary";
}

const Button: FC<ButtonProps> = (props) => {
    const { variant, children } = props;
    const colorClass = variant === "primary" ? "blue" : "red";
    return (
        <button
            style={{ backgroundColor: colorClass }}
            {...props}
            className="p-2 b-2"
        >
            {children}
        </button>
    );
};

export default Button;
