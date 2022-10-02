import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from '../styles/themes/theme'
import { GlobalStyle } from '../styles/global'
import { HtmlContext } from 'next/dist/shared/lib/html-context'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={defaultTheme}>
          <Component {...pageProps} />

          <GlobalStyle />
    </ThemeProvider>
  )
}

export default MyApp

