import React from 'react'
import { ThemeProvider, createTheme } from '@material-ui/core/styles'
import { Header, Footer } from './Layouts'
import Articles from './Articles/Articles'

const theme = createTheme({
  palette: {
    primary: {
      main: '#fff'
    }
  }
})
console.log('theme is', createMuiTheme)

const app = () => (
  <ThemeProvider theme={theme} className="App">
    <Header />
    <Articles />
    <Footer />
  </ThemeProvider>
)

export default app
