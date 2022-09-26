import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { MantineProvider, Text } from '@mantine/core';
import 'virtual:windi.css'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
     <MantineProvider withGlobalStyles withNormalizeCSS>
        <App />
     </MantineProvider>
  </React.StrictMode>
)
