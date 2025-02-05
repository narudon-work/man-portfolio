import { LanguageProvider } from './languages/LanguageProvider'
import './App.css'
import Portfolio from './Portfolio'

function App() {

  return (
      <LanguageProvider>
          <Portfolio />
      </LanguageProvider>
  )
}

export default App
