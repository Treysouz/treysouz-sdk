import { Props } from "./button.types";

export const Button = (props: Props) => {
  return <button {...props}>{props?.children}</button>;
};
