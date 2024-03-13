
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { RootLayout } from '@/routes'

function App() {

  return (
    <BrowserRouter>
      <RootLayout />
    </BrowserRouter>
  )
}

export default App
