import { ThemeProvider } from '@emotion/react'
import './App.css'
import './config/fonts.css'
import theme from './config/theme'
import { BrowserRouter } from 'react-router-dom'
import { Navigation } from './routes'
import { WebViewProvider } from './contexts/WebViewContext'

function App() {

  return (
    <WebViewProvider>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Navigation />
        </ThemeProvider>
      </BrowserRouter>
    </WebViewProvider>
  )
}

export default App
