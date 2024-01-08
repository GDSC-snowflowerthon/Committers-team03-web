import {BrowserRouter} from 'react-router-dom';
import Router from './Router';
import {ThemeProvider} from 'styled-components';
import theme from './theme';
import { useBackgroundTheme } from './hooks/useBackgroundTheme';
import { GlobalStyle } from './style';

const App = () => {
  const backgroundColor = useBackgroundTheme();

  return (
    <>
      <ThemeProvider theme={theme}>
      <GlobalStyle backgroundColor={backgroundColor} />
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
};

export default App;
