import React from 'react';
import '../styles/globals.css'; // Updated to lowercase 'styles'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;