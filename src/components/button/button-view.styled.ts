"use client";
import { styled } from "styled-components";

interface ButtonProps {
  isPressed?: boolean;
}

export const Content = styled.div<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 6rem;
  height: 2.375rem;
  border-radius: 10px;
  cursor: pointer;
  ${({ isPressed }) =>
    isPressed &&
    `
  background-color:#154e69;
  box-shadow:-2px 3px 7px -5px #95f3ffff;
  border:1px solid #53eafd;
  `}
`;

export const Label = styled.p`
  font-family: var(--font-geist);
  font-size: 1rem;
  font-weight: 500;
  color: #53eafd;
`;

export const Icon = styled.div`
  width: 0.844rem;
  height: 0.891rem;
  margin-right: 10px;
`;
