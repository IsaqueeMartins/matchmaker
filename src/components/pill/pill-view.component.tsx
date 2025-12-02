import * as S from "./pill-view.styled";

export const PillView: React.FC<IPillProps> = ({ label, icon, id }) => {
  return (
    <S.Container>
      {icon}
      <S.Label>{label}</S.Label>
    </S.Container>
  );
};
