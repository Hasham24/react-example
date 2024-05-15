import { HTMLProps } from "react";

export interface IAccountButton
  extends Omit<HTMLProps<HTMLButtonElement>, "type"> {
  prefix: string;
  postfix: string;
  onClick?: () => void;
}
