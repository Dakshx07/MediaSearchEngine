import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import {store} from './redux/store.js'
import {BrowserRouter} from 'react-router-dom'
import Stairs from './Loader/Stairs.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Provider store={store}>
    <BrowserRouter>
     <Stairs>
        <App />
      </Stairs>
    </BrowserRouter>
   </Provider>
  </StrictMode>,
)
