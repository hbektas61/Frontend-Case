import Layout from "@/components/Layout/Layout";
import Header from "@/components/Header/Header";
import { ClerkProvider } from "@clerk/nextjs";
import "@/styles/globals.css";
import { CssBaseline } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme();

export default function App({ Component, pageProps }) {
  return (
    <ClerkProvider {...pageProps}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <Component {...pageProps} />
      </ThemeProvider>
    </ClerkProvider>
  );
}
