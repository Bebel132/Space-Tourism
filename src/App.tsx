import { ThemeProvider } from '@emotion/react'
import './App.css'
import './config/fonts.css'
import theme from './config/theme'
import { BrowserRouter } from 'react-router-dom'
import { Navigation } from './routes'

function App() {

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Navigation />
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
