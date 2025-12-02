import { ICardProps } from "./card-types";
import { CardView } from "./card-view.component";

export const Card: React.FC<ICardProps> = ({
  background,
  title,
  value,
  icon,
}) => {
  return (
    <CardView background={background} title={title} value={value} icon={icon} />
  );
};
