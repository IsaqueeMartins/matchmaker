import { Header } from "@/src/components/header/header.component";
import { Pill } from "@/src/components/pill/pill.component";
import { Fragment } from "react/jsx-runtime";
import * as S from "./home-page-body-view.styled";
export const HomePageBodyView: React.FC = () => {
  return (
    <S.Container>
      <Header />
      <S.Content>
        <Pill />
      </S.Content>
    </S.Container>
  );
};
