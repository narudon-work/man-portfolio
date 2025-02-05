import { LanguageProvider } from './languages/LanguageProvider'
import Portfolio from './Portfolio'

function App() {

  return (
      <LanguageProvider>
          <Portfolio />
      </LanguageProvider>
  )
}

export default App
