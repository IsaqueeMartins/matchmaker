"use client";
import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  padding: 0 1rem;
  align-items: center;
  justify-content: center;
  gap: 4rem;
  width: 100%;
  height: 4.125rem;
  background-color: #2a3550;
  border-bottom: 1px solid #484b53ff;
  box-shadow: 1px 9px 37px 11px rgba(0, 0, 0, 0.33);
`;

export const Logo = styled.h1`
  font-family: var(--font-geist);
  font-size: 1.6rem;
  font-weight: 700;
  background: linear-gradient(
    90deg,
    rgba(86, 158, 187, 1) 0%,
    rgba(99, 175, 189, 1) 51%,
    rgba(112, 139, 153, 1) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
