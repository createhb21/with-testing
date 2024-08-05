export interface IDialogProps {
  existFooter?: boolean;
  closeTitle?: string;
  confirmtitle?: string;
  handleConfirm?: () => void;
  opacity?: number;
  handleClose: () => void;
}
