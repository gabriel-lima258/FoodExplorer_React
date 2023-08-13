import React from 'react'
import ReactDOM from 'react-dom/client'
import { Routes } from './routes'

import { ThemeProvider } from 'styled-components'
import GlobalStyle from './styles/global'
import theme from './styles/theme'

// Sempre que criar um hook não esqueça de importá-lo para routes!
import { AuthProvider } from './hooks/auth'
import { CartProvider } from './hooks/cart'
import { FavoritesProvider } from './hooks/favorites'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <ThemeProvider theme={theme}>
      <GlobalStyle/>
          <AuthProvider>
              <CartProvider>
                  <FavoritesProvider>

                  <Routes/>
                    
                  </FavoritesProvider>
              </CartProvider>
          </AuthProvider>
    </ThemeProvider>

  </React.StrictMode>,
)
