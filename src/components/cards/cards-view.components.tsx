import * as S from "./cards-view.styled";
import { Card } from "./components/card/card.component";
import TwoPeople from "../../assets/icons/two-people.svg";
import Thunder from "../../assets/icons/thunder.svg";
import Heart from "../../assets/icons/heart.svg";

export const CardsView: React.FC = () => {
  return (
    <S.Container>
      <Card
        background={"#14536F"}
        title={"JOGADORES ATIVOS"}
        value={"2.9K"}
        icon={<TwoPeople />}
      />
      <Card
        background={"#94235f"}
        title={"SALAS CRIADAS"}
        value={"21k"}
        icon={<Thunder />}
      />
      <Card
        background={"#177a59"}
        title={"PARTIDAS JOGADAS"}
        value={"32K"}
        icon={<Heart />}
      />
      <Card
        background={"#b15c20"}
        title={"CONTAS CRIADAS"}
        value={"12.2K"}
        icon={<TwoPeople />}
      />
    </S.Container>
  );
};
