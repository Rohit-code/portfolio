import React from 'react';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import { ThemeContextProvider, useThemeContext } from '../context/theme';
import { CursorContextProvider } from '../context/cursor';
import { MenuContextProvider } from '../context/menu';
import GlobalStyles from '../styles/global';
import darkTheme from '../styles/themes/dark';
import lightTheme from '../styles/themes/light';
import AppBar from '../components/AppBar';
import Cursor from '../components/Cursor';
import Menu from '../components/Menu';

const themes = {
  dark: darkTheme,
  light: lightTheme,
};

const ThemedApp = ({ children }) => {
  const [state] = useThemeContext();
  const currentTheme = themes[state.theme];

  React.useEffect(() => {
    console.log('🎨 ThemedApp: Theme changed to', state.theme);
    console.log('🎨 ThemedApp: Current theme object', currentTheme);
  }, [state.theme, currentTheme]);

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};

const Header = () => <AppBar direction="down" renderAs="header" />;

const App = ({ Component, pageProps }) => {
  React.useEffect(() => {
    console.log('%c🚀 APPLICATION STARTED 🚀', 'color: #6366F1; font-size: 20px; font-weight: bold;');
    console.log('%c━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', 'color: #EC4899;');
    console.log('%cPortfolio Website - Debug Mode Active', 'color: #8B5CF6; font-size: 14px;');
    console.log('%c━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', 'color: #EC4899;');
    console.log('🚀 App: Application mounted');
    console.log('🚀 App: Page component', Component.name || 'Unknown');
    console.log('🚀 App: Page props', pageProps);
    console.log('🚀 App: Environment', process.env.NODE_ENV);
    return () => console.log('🚀 App: Application unmounted');
  }, []);

  React.useEffect(() => {
    console.log('📄 App: Page changed', { component: Component.name, props: pageProps });
  }, [Component, pageProps]);

  return (
    <>
      <Head>
        <title>Custom Software Development | Web, Mobile & AI Solutions</title>
        <meta name="description" content="Transform your business with cutting-edge software solutions. Expert web development, mobile apps, and AI services. From startups to enterprises." />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <ThemeContextProvider>
        <MenuContextProvider>
          <CursorContextProvider>
            <ThemedApp>
              <Header />
              <Menu />
              <Component {...pageProps} />
              <Cursor />
            </ThemedApp>
          </CursorContextProvider>
        </MenuContextProvider>
      </ThemeContextProvider>
    </>
  );
};

export default App;
