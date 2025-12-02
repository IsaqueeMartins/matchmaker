import * as S from "./primary-button-view.styled";

export const PrimaryButtonView: React.FC<IPrimaryButtonProps> = ({
  label,
  background,
  height,
  width,
  id,
}) => {
  return (
    <S.Container background={background} height={height} width={width}>
      <S.Label>{label}</S.Label>
    </S.Container>
  );
};
