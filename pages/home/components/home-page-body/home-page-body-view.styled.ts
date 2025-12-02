"use client";
import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Hero = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
`;

export const HeroTitle = styled.h1`
  font-family: var(--font-geist);
  font-weight: 800;
  color: white;
  font-size: 96px;
  text-align: center;
`;

export const Highlight = styled.span`
  background: linear-gradient(
    90deg,
    rgba(79, 189, 232, 1) 0%,
    rgba(62, 170, 189, 1) 51%,
    rgba(0, 230, 126, 1) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const HeroSubtitle = styled.p`
  font-family: var(--font-geist);
  font-weight: 200;
  font-size: 20px;
  color: #f0f0f0;
  text-align: center;
`;

export const HeroButtons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export const HeroCards = styled.div`
  margin-top: 2rem;
`;
