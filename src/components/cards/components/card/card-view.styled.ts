"use client";
import { styled } from "styled-components";

interface ICardProps {
  background: string;
}

export const Container = styled.div<ICardProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 12rem;
  height: 7rem;
  padding: 1rem;
  background-color: ${({ background }) => background};
  border-radius: 10px;
`;

export const Content = styled.div`
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  font-family: var(--font-geist);
  font-size: 14px;
  color: white;
`;

export const Value = styled.h1`
  font-family: var(--font-geist);
  font-size: 30px;
  font-weight: 700;
  color: white;
`;

export const Icon = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
