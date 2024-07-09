import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { FiltersProvider } from './context/filters.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <FiltersProvider>
    <App />
  </FiltersProvider>,
)