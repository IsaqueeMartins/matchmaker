import { Header } from "@/src/components/header/header.component";
import { Pill } from "@/src/components/pill/pill.component";
import * as S from "./home-page-body-view.styled";
import { PrimaryButton } from "@/src/components/primary-button/primary-button.component";
import { Cards } from "@/src/components/cards/cards.component";
export const HomePageBodyView: React.FC = () => {
  return (
    <S.Container>
      <Header />
      <S.Hero>
        <Pill />
        <S.HeroTitle>
          Encontre jogadores <br />
          <S.Highlight> agora. Sem fila.</S.Highlight>
        </S.HeroTitle>
        <S.HeroSubtitle>
          Encontre seu squad perfeito em segundos. Jogue com <br />
          pessoas que compartilham seu nível e paixão por gaming.
        </S.HeroSubtitle>
        <S.HeroButtons>
          <PrimaryButton
            label={"Explorar Salas"}
            background={"#00B8DB"}
            height={3}
            width={12}
          />
          <PrimaryButton
            label={"Criar Sala"}
            background={"#03a775"}
            height={3}
            width={8}
          />
        </S.HeroButtons>
        <S.HeroCards>
          <Cards />
        </S.HeroCards>
      </S.Hero>
    </S.Container>
  );
};
