import { PrimaryButtonView } from "./primary-button-view.component";

export const PrimaryButton: React.FC<IPrimaryButtonProps> = ({
  label,
  background,
  height,
  width,
}) => {
  return (
    <PrimaryButtonView
      label={label}
      background={background}
      height={height}
      width={width}
    />
  );
};
