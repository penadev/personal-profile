/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import theme from '../src/theme';
import { GlobalStyle } from '../src/theme/GlobalStyle';

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>Fernando Pena</title>
        <meta name="title" content="Fernando Pena - Arquiteto de Soluções" />
        <meta name="description" content="Arquiteto de Soluções e Desenvolvedor FullStack Senior - Perfil Profissional" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://pena.rocks/" />
        <meta property="og:title" content="Fernando Pena - Arquiteto de Soluções" />
        <meta property="og:description" content="Arquiteto de Soluções e Desenvolvedor FullStack Senior - Perfil Profissional" />
        <meta property="og:image" content="/images/meta_tag.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://pena.rocks/" />
        <meta property="twitter:title" content="Fernando Pena - Arquiteto de Soluções" />
        <meta property="twitter:description" content="Arquiteto de Soluções e Desenvolvedor FullStack Senior - Perfil Profissional" />
        <meta property="twitter:image" content="/images/meta_tag.png" />

        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Fugaz+One&family=Lato:wght@400;700&family=Libre+Barcode+39+Text&family=Roboto:wght@400;700&display=swap" rel="stylesheet" />

        <link rel="shortcut icon" href="/images/programming.png" />

      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </div>
  );
}
