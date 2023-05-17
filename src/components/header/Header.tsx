import { HeaderContainer, TeaterLogo } from './Header.stlye'
import nextMovies from 'assets/logos/next-movies.png'

const Header = () => {
  return (
    <HeaderContainer>
      <TeaterLogo src={nextMovies} />
    </HeaderContainer>
  )
}

export default Header
