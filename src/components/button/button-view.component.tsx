import { IButtonProps } from "./button-types";
import * as S from "./button-view.styled";

export const ButtonView: React.FC<IButtonProps> = ({
  label,
  icon,
  isPressed,
  onClick,
  id,
}) => {
  const handleClick = () => {
    onClick!(id!);
  };
  return (
    <S.Content isPressed={isPressed} onClick={handleClick}>
      {icon && <S.Icon>{icon}</S.Icon>}
      <S.Label>{label}</S.Label>
    </S.Content>
  );
};
