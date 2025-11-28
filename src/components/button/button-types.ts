export interface IButtonProps {
  label: string;
  id?: string;
  icon?: React.ReactNode;
  isPressed?: boolean;
  onClick?: (id: string) => void;
}
