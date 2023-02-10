import { extendTheme, ThemeProvider } from '@chakra-ui/react';
import { HelmetProvider } from 'react-helmet-async';
import { AuthProvider } from '~/components/contexts/UserContext';
import Main from '~/components/root/Main';
import { colors } from '~/styles/colors';
import { textStyles } from '~/styles/textStyles';
import { ReportProvider } from '../contexts/ReportContext';
import 'inter-ui/inter.css';
import 'react-slideshow-image/dist/styles.css';

export const App = () => {
  const theme = extendTheme({ textStyles, colors });

  return (
    <HelmetProvider>
      <AuthProvider>
        <ReportProvider>
          <ThemeProvider theme={theme}>
            <Main />
          </ThemeProvider>
        </ReportProvider>
      </AuthProvider>
    </HelmetProvider>
  );
};
