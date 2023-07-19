import React from "react";
import { useNavigate } from "react-router-dom";
//lib
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
//img&icon
import backIcon from "../assets/images/btn_back.png";

const Header = ({ title }: { title: string }) => {
  const navigate = useNavigate();

  const goToBackPage = () => {
    navigate("/backPage");
  };

  return (
    <Box
      display="flex"
      sx={{
        padding: "1.3125rem 1.25rem 0.56rem",
        borderBottom: "1px solid #F0F0F0",
      }}
    >
      <img
        src={backIcon}
        alt="뒤로가기 이미지"
        style={{ width: "1.5rem", height: "1.5rem" }}
        onClick={goToBackPage}
      />
      <Typography
        sx={{ minWidth: "19.4375rem", paddingLeft: "7rem", fontWeight: "500" }}
      >
        {title}
      </Typography>
    </Box>
  );
};

export default Header;
