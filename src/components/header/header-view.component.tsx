import { HeaderButtons } from "./components/header-buttons/header-buttons.component";
import * as S from "./header-view.styled";
export const HeaderView: React.FC = () => {
  return (
    <S.Header>
      <S.Logo>Matchmaking</S.Logo>
      <HeaderButtons />
    </S.Header>
  );
};
