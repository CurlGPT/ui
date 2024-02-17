import { ButtonHTMLAttributes, FC } from "react";
import "./Button.css";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary";
}

const Button: FC<ButtonProps> = (props) => {
    const { variant, children, style } = props;
    const colorClass = () => {
        if (variant === "primary")
            return {
                borderColor: "#6366F1",
                backgroundColor: "#6366F1",
                color: "#FAFAFA",
            };
        if (variant === "secondary")
            return {
                borderColor: "#6366F1",
                backgroundColor: "#FAFAFA",
                color: "#6366F1",
            };
        return {};
    };
    return (
        <button
            style={{ ...colorClass(), ...style }}
            {...props}
            className="p-2 b-2"
        >
            {children}
        </button>
    );
};

export default Button;
