import './App.css';
import 'atropos/css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './layouts/Home';
import Libro from './pages/Libro';
import Page404 from './pages/Page404';

function App() {

  let texto = "Entraron a clases y cada uno con su respectivo grupo, afortunadamente ambos quedaron en el turno vespertino y se podían ver en algún momento. Javiecito ya tenía en mente algo, era el pedirle a Isabe si le permitía estar con ella en una relación sentimental, pero estaba indeciso ante este pensamiento. Inesperadamente, le llegó un mensaje a él, era de una de las amigas de Isabe, ella le preguntaba sobre la decisión de pedirle que sea su novia, al mismo tiempo, ella alentó a Javiecito para hacerlo y de igual manera, lo aconsejó para hacerlo de la mejor manera; Javiecito sabía que tenía que aprovechar todos los consejos, se armó de valor y tomó la decisión de hacerlo. Preparó todas las cosas para para hacerlo de la manera más bonita y detallada, él le compró un hermoso peluche de Panda, un ramo de flores y una caja de ricos chocolates. Llegó el día en que Javiecito le iba a pedirle a Isabe si le daba la oportunidad de estar junto a ella en una relación sentimental, para esto, Javiecito acudió a unas amigas de ella para poder ayudarle. Cada vez se acercaba la hora del receso, y Javiecito sabía lo que esto significaba. Todos salieron al receso y Javiecito fue al salón de Isabe para ir por ella y llevarla a donde se iba a ejecutar todo. La llevó al lugar, y salieron sus amistades con todo lo que Javiecito tenía preparado para ella, y en este preciso momento, Javiecito tomó el ramo de flores, y le hizo a una Isabe una pregunta muy importante, si le permitía ser su novio y estar juntos en una relación, todo tipo de pensamientos llegaban a la mente de Javiecito, con tanto temor, nerviosismo y al mismo tiempo felicidad. Isabe respondió la pregunta y le dijo que sí, fue momento muy hermoso para todos, pero más, para estos dos jóvenes que iniciaban una relación de noviazgo. Después de un rato, ellos se quedaron juntos, platicaron un rato, hasta que acercaron sus rostros, y por primera vez para ellos, se dieron su primer beso de la relación. Un momento lleno de emociones y un beso lleno de sentimientos con algo peculiar, ya que Isabe se emocionó por la adrenalina del momento, y en el beso, introdujo su lengua en la boca de Javiecito, sin embargo, él no comentó nada por respeto a ella. Y así fue como se ellos fueron creando una bonita historia de amor, llena de muchos sentimientos y emociones. Hasta el día de hoy, ellos siguen juntos amándose con toda el alma, y les espera un gran futuro junto con sus amados pelichis."

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/nuestra-historia-amor' element={<Libro />} />
          <Route path='*' element={<Page404 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
