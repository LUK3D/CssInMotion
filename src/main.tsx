import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { MantineProvider, Text } from '@mantine/core';
import 'virtual:windi.css'
import './index.css'

import {store} from './redux/store';
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
   <Provider store={store}>
     <MantineProvider withGlobalStyles withNormalizeCSS theme={{colorScheme:  'dark' }}>
        <App />
     </MantineProvider>
   </Provider>
  </React.StrictMode>
)
