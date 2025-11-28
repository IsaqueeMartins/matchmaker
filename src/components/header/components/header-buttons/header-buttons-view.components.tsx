import House from "@/src/assets/icons/house.svg";
import TwoPeople from "@/src/assets/icons/two-people.svg";
import OnePeople from "@/src/assets/icons/one-people.svg";
import { Button } from "@/src/components/button/button.component";
import * as S from "./header-buttons-view.styled";

interface IHeaderButtonsViewProps {
  isPressed: string | null;
  onClick: (id: string) => void;
}

export const HeaderButtonsView: React.FC<IHeaderButtonsViewProps> = ({
  isPressed,
  onClick,
}) => {
  return (
    <S.Content>
      <Button
        label={"Início"}
        icon={<House />}
        id={"btn-inicio"}
        isPressed={isPressed === "btn-inicio"}
        onClick={() => onClick("btn-inicio")}
      />
      <Button
        label={"Salas"}
        icon={<TwoPeople />}
        id={"btn-salas"}
        isPressed={isPressed === "btn-salas"}
        onClick={() => onClick("btn-salas")}
      />
      <Button
        label={"Perfil"}
        icon={<OnePeople />}
        id={"btn-perfil"}
        isPressed={isPressed === "btn-perfil"}
        onClick={() => onClick("btn-perfil")}
      />
    </S.Content>
  );
};
