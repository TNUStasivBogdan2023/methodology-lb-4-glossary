import React, { ComponentProps, FC } from "react";
import { cn } from "@/utils";

export type WrapperProps = ComponentProps<"div">;
export const Wrapper: FC<WrapperProps> = ({ className, ...rest }) => {
  return <div {...rest} className={cn("w-[1024px] mx-auto", className)} />
}
