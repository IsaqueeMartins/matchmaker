import { PillView } from "./pill-view.component";
import Star from "../../assets/icons/star.svg";

export const Pill: React.FC = () => {
  return <PillView label={"Bem-vindo ao Matchmaking"} icon={<Star />} />;
};
