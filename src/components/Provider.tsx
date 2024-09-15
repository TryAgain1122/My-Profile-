"use client";

import { NextUIProvider } from "@nextui-org/react";

interface Props {
  children: React.ReactNode;
}

import React from "react";

const Provider = ({ children }: Props) => {
  return <NextUIProvider>{children}</NextUIProvider>;
};

export default Provider;
