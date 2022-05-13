import About from './Components/about'
import Footer from './Components/footer'
import Nav from './Components/Nav'
import Team from './Components/team'
import What from './Components/what'
const App = () =>
{
  return (
    <div className='bg-gray-200'>
    
      <Nav />
      <What />
      <About />
      <Team />
      <Footer />
    </div>
  )
}

export default App