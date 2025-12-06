'use client';

import StyledComponentsRegistry from './registry';
import { ThemeProvider } from '../context/theme';
import { MenuProvider } from '../context/menu';
import { CursorProvider } from '../context/cursor';
import GlobalStyles from '../styles/global';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Studio - Premium Digital Experiences</title>
        <meta name="description" content="We craft premium web applications, mobile apps, and AI solutions" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <StyledComponentsRegistry>
          <ThemeProvider>
            <MenuProvider>
              <CursorProvider>
                <GlobalStyles />
                {children}
              </CursorProvider>
            </MenuProvider>
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
