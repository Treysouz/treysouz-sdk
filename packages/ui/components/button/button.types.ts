import { ButtonHTMLAttributes } from "react";

export interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**Descriptive text for element */
  "aria-label": string;
}
