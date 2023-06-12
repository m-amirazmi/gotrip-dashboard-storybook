import React from "react";

export interface IProps {
  children: React.ReactNode;
}

export interface IButtonProps extends IProps {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => null;
  iconArrow: boolean;
  iconSearch: boolean;
  pill: boolean;
  variant: "solid" | "outline" | "light";
  size: "sm" | "md" | "lg";
}
