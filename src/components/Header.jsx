import React from "react";
import "../App.css"; // Import the CSS file for styling
import { Box, Button, Typography } from "@mui/material";
import { FlexRowAlignCenter, FlexRowSpaceBetween } from "./Containers";

const Header = () => {
  return (
    <FlexRowSpaceBetween
      className="grad"
      style={{
        padding: "1.3rem",
        backgroundColor: "#C2E6F4",
        marginBottom: "0.5rem",
      }}
    >
      <Typography
        variant="h4"
        noWrap
        component="div"
        sx={{ display: { xs: "none", sm: "block" } }}
      >
        BondMate
      </Typography>
      <Button size="small" variant="contained">
        <Typography
          variant="body1"
          noWrap
          component="div"
          sx={{ display: { xs: "none", sm: "block" } }}
        >
          Create
        </Typography>
      </Button>
    </FlexRowSpaceBetween>
  );
};

export default Header;
