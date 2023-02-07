import { ThemeProvider } from '@opengovsg/design-system-react';
import { HelmetProvider } from 'react-helmet-async';
import { AuthProvider } from '~/components/contexts/UserContext';
import Main from '~/components/root/Main';
import { ReportProvider } from '../contexts/ReportContext';

export const App = () => {
  return (
    <HelmetProvider>
      <AuthProvider>
        <ReportProvider>
          <ThemeProvider>
            <Main />
          </ThemeProvider>
        </ReportProvider>
      </AuthProvider>
    </HelmetProvider>
  );
};
