import { Backdrop, CircularProgress } from "@mui/material";
import React, { useEffect } from "react";
import { useAppSelector } from "../../../app/hooks";

const LoadingOverlay: React.FC = () => {
  const status = useAppSelector((state) => state.todos.status);

  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    if (status === "loading") {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [status]);
  return (
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={open}
    >
      {status === "loading" ? (
        <CircularProgress data-testid="circularIcon" color="inherit" />
      ) : (
        ""
      )}
    </Backdrop>
  );
};

export default LoadingOverlay;
