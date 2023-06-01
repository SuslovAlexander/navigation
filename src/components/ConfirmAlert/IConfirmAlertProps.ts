export interface IConfirmAlertProps {
  header: string;
  text: string;
  onConfirm?: () => void;
  onCancel: React.MouseEventHandler<HTMLDivElement>;
}
