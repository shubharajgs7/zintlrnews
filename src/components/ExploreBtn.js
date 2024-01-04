import React, { useState } from "react";
import Button from "@mui/material/Button";
import TravelExploreOutlinedIcon from "@mui/icons-material/TravelExploreOutlined";
import ExploreNews from "./MoreNews/ExploreNews";

const ExploreBtn = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <Button
        variant="contained"
        sx={{
          margin: "1px",
          position: "fixed",
          bottom: "20px",
          backgroundColor: "pink",
          zIndex: 9999,
          borderRadius: "15px",
          "&:hover": {
            backgroundColor: "pink", // Set the hover color to the same as the default color
          },
        }}
        onClick={handleOpen}
      >
        <TravelExploreOutlinedIcon />
        Explore
      </Button>
      {open && <ExploreNews open={open} setOpen={setOpen} />}
    </div>
  );
};

export default ExploreBtn;
