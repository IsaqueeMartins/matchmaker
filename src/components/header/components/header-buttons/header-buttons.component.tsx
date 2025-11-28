"use client";
import { useState } from "react";
import { HeaderButtonsView } from "./header-buttons-view.components";

export const HeaderButtons: React.FC = () => {
  const [isPressed, setIsPressed] = useState<string | null>(null);

  const handleClick = (id: string) => {
    setIsPressed(id);
  };
  return <HeaderButtonsView isPressed={isPressed} onClick={handleClick} />;
};
