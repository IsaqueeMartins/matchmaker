"use client";
import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 15.6rem;
  height: 2.6rem;
  border-radius: 100px;
  background-color: #154e69;
  border: 1px solid #53eafd;
  box-shadow: -2px 3px 10px -5px #95f3ffff;
  &:hover {
    scale: 1.1;
    transition: 0.1s;
  }
`;

export const Label = styled.p`
  font-family: var(--font-geist);
  font-size: 14px;
  margin-left: 5px;
  font-weight: bold;
  color: #35bcceff;
`;
