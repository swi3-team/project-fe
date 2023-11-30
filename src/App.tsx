import { ThemeProvider } from '@emotion/react';
import { Content } from './components/layout/content';
import { theme } from './theme';

export const App = () => (
  <ThemeProvider theme={theme}>
    <Content />
  </ThemeProvider>
);

export default App;
