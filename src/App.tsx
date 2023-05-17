import { Container } from 'App.style'
import { Footer } from './components/footer'
import { Header } from './components/header'
import { Dashboard } from './components/dashboard'

function App() {
  return (
    <Container data-testid="app">
      <Header />
      <Dashboard />
      <Footer />
    </Container>
  )
}

export default App
