import React from "react";
import { cn } from "@/lib/utils";
import { FlexProps } from "./types";

export const Row = ({
  children,
  className,
  gap = 4,
  wrap = false,
  align = "center",
  justify = "start",
  grow = false,
  shrink = false,
}: FlexProps) => {
  return (
    <div
      className={cn(
        "flex flex-row",
        `gap-${gap}`,
        wrap && "flex-wrap",
        {
          "items-start": align === "start",
          "items-center": align === "center",
          "items-end": align === "end",
          "items-stretch": align === "stretch",
          "items-baseline": align === "baseline",
          "justify-start": justify === "start",
          "justify-center": justify === "center",
          "justify-end": justify === "end",
          "justify-between": justify === "between",
          "justify-around": justify === "around",
          "justify-evenly": justify === "evenly",
          grow: grow,
          "shrink-0": !shrink,
        },
        className
      )}
    >
      {children}
    </div>
  );
};

export const Col = ({
  children,
  className,
  gap = 4,
  wrap = false,
  align = "start",
  justify = "start",
  grow = false,
  shrink = false,
}: FlexProps) => {
  return (
    <div
      className={cn(
        "flex flex-col",
        `gap-${gap}`,
        wrap && "flex-wrap",
        {
          "items-start": align === "start",
          "items-center": align === "center",
          "items-end": align === "end",
          "items-stretch": align === "stretch",
          "items-baseline": align === "baseline",
          "justify-start": justify === "start",
          "justify-center": justify === "center",
          "justify-end": justify === "end",
          "justify-between": justify === "between",
          "justify-around": justify === "around",
          "justify-evenly": justify === "evenly",
          grow: grow,
          "shrink-0": !shrink,
        },
        className
      )}
    >
      {children}
    </div>
  );
};

export const Center = ({
  children,
  className,
}: Omit<FlexProps, "align" | "justify">) => {
  return (
    <Row justify="center" align="center" className={className}>
      {children}
    </Row>
  );
};

export const Stack = ({
  children,
  className,
  gap = 4,
}: Omit<FlexProps, "direction" | "align" | "justify">) => {
  return (
    <Col gap={gap} className={className}>
      {children}
    </Col>
  );
};

export const Cluster = ({
  children,
  className,
  gap = 4,
  justify = "start",
}: Omit<FlexProps, "direction" | "align">) => {
  return (
    <Row gap={gap} wrap justify={justify} className={className}>
      {children}
    </Row>
  );
};

export const Spacer = () => <div className="grow" />;
