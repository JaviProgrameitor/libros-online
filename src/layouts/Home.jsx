import '../assets/css/Home.css'

import Portada from '../components/Portada/Portada'

function Home(props) {
  return (
    <div className='container-home'>
      <h1 className='container-home__titulo'>Libros Para Isabe Bonita</h1>
      <Portada />
    </div>
  )
}

export default Home