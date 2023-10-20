import Layout from '@/components/Layout/Layout';
import '@/styles/globals.css';
import { CssBaseline } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';


const theme = createTheme();

export default function App({ Component, pageProps }) {
  
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
    )
}
