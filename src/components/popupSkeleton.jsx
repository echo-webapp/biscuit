import { Dialog } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Close from "../assets/close";
import { useCallback } from "react";

const useStyles = makeStyles((theme) => ({
  dialog: {
    "& .MuiPaper-root": {
      position: "absolute",
      bottom: 0,
      right: 0,
      left: 0,
      width: "100%",
      margin: 0,
      borderTopRightRadius: "22px",
      borderTopLeftRadius: "22px",
    },
  },

  root: {
    width: "100%",
    maxWidth: "1051px",
    maxHeight: "min(90vh, 800px)",
    // maxHeight: "675px",
    // height: "675px",
    overflowY: "auto",
  },
  closeButton: {
    position: "absolute",
    zIndex: 1,
    right: "5px",
    top: "5px",
  },
}));

/**
 *
 * @param handleClose : will be called when dialog will be closed by "x" button
 * @param open : wheter to show dialog or not
 * @param children : whatever that comes inside the dialog in jsx form
 * @param styless : inline styles for root component
 * @returns
 */
const PopupSkeleton = ({
  open,
  handleClose,
  children,
  styless,
  styleToDialog,
}) => {
  const classes = useCallback(useStyles, [])();

  return (
    <Dialog
      disableEnforceFocus
      onClose={handleClose}
      open={open}
      maxWidth={false}
      className={classes.dialog}
      style={styleToDialog}
    >
      <div className={classes.closeButton}>
        <Close onClick={handleClose} />
      </div>
      <div className={classes.root} style={styless}>
        {children}
      </div>
    </Dialog>
  );
};

export default PopupSkeleton;
