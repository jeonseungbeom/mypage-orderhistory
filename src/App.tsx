import React from "react";
//lib
import Router from "./Router";
import CssBaseline from "@mui/material/CssBaseline";
import GlobalStyles from "@mui/material/GlobalStyles";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
//component

const theme = createTheme({
  typography: {
    // htmlFontSize: 10,
    fontFamily: "Noto Sans KR, sans-serif",
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles
        styles={{
          html: {
            // fontSize: "62.5%",
          },
        }}
      />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            minHeight: "100vh",
            maxWidth: "23.4375rem",
          }}
        >
          <Router />
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default App;
