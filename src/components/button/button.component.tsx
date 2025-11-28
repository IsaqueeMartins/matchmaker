import { IButtonProps } from "./button-types";
import { ButtonView } from "./button-view.component";

export const Button: React.FC<IButtonProps> = ({
  label,
  icon,
  isPressed,
  id,
  onClick,
}) => {
  return (
    <ButtonView
      label={label}
      icon={icon}
      isPressed={isPressed}
      id={id}
      onClick={onClick}
    />
  );
};
