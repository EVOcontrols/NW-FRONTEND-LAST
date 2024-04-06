import classNames from "classnames";
import { Loader } from "../Loader";
import styles from "./Button.module.scss";

interface Props
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  variant?: "primary" | "secondary" | "danger";
  size?: "small" | "large";
  width?: string | number;
  height?: string | number;
  loading?: boolean;
}

export const Button = ({
  className,
  variant = "primary",
  size = "small",
  style,
  width,
  height,
  loading = false,
  children,
  ...props
}: Props) => {
  return (
    <button
      className={classNames(
        styles.wrapper,
        styles[size],
        styles[variant],
        className,
      )}
      style={{ width, height, ...style }}
      {...props}
    >
      {loading ? <Loader size={24} /> : children}
    </button>
  );
};