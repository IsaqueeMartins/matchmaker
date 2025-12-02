import { Fragment } from "react/jsx-runtime";
import { ICardProps } from "./card-types";
import * as S from "./card-view.styled";

export const CardView: React.FC<ICardProps> = ({
  background,
  title,
  value,
  icon,
}) => {
  return (
    <S.Container background={background}>
      <S.Content>
        <S.Title>{title}</S.Title>
        <S.Value>{value}</S.Value>
      </S.Content>
      <S.Icon>{icon}</S.Icon>
    </S.Container>
  );
};
