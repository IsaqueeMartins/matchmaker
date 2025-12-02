"use client";
import { styled } from "styled-components";

interface IPrimaryButtonProps {
  height: number;
  width: number;
  background: string;
}

export const Container = styled.div<IPrimaryButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${({ height }) => `${height}rem`};
  width: ${({ width }) => `${width}rem`};
  background: ${({ background }) => background};
  border-radius: 8px;
  box-shadow: -2px 3px 14px -5px #95f3ffff;
  cursor: pointer;
`;

export const Label = styled.h1`
  font-family: var(--font-geist);
  font-size: 14px;
  font-weight: 800;
`;
