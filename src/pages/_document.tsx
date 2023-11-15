import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import { ThemeProvider, createTheme } from '@mui/material/styles';
const theme = createTheme({
  typography: {
    fontFamily: 'Segoe UI, sans-serif',
  },
});

import { DocumentContext, DocumentInitialProps } from 'next/dist/shared/lib/utils';

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App: React.ComponentType) => (props: any) => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render(): JSX.Element {
    return (
      <Html lang="en">
        <ThemeProvider theme={theme}>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
        </ThemeProvider>
      </Html>
    );
  }
}
