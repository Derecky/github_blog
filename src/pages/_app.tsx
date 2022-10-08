import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from '../styles/themes/theme'
import { GlobalStyle } from '../styles/global'
import { HtmlContext } from 'next/dist/shared/lib/html-context'
import TodoProvider from '../context/main'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <TodoProvider>
      <ThemeProvider theme={defaultTheme}>
          <Component {...pageProps} />

          <GlobalStyle />
      </ThemeProvider>
    </TodoProvider>
  )
}

export default MyApp

