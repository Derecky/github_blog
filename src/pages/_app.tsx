import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from '../styles/themes/theme'
import { GlobalStyle } from '../styles/global'
import { CartProvider } from '../context/CartContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <ThemeProvider theme={defaultTheme}>
          <Component {...pageProps} />
          <GlobalStyle />
      </ThemeProvider>
    </CartProvider>
  )
}

export default MyApp

