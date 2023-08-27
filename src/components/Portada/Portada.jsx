import '../../assets/css/components/Portada.css'

import { useEffect } from 'react';

import { Link } from 'react-router-dom';

import Atropos from 'atropos/react';

import NuestraHistoriaPortada from '../../assets/img/imagen.png'
import Titulo1 from '../../assets/img/titulo1.png'
import Titulo2 from '../../assets/img/titulo2.png'
import Titulo3 from '../../assets/img/titulo3.png'
import Sinopsis from '../../assets/img/sinopsis.png'

function Portada(props) {
  return (
    <Link to={'/nuestra-historia-amor'}>
      <div className='contenedor__portada'>
        <Atropos 
          className='portada' 
          rotateXMax={360} 
          rotateYMax={360}
          rotateChildren={
            <>
              <div className='bordes borde-izquierdo'>
                <div className='caja-barra__lateral'>
                  <div className='barra__lateral'></div>
                </div>
              </div>
              <div className='bordes borde-derecho'></div>
              <div className='bordes-superiores borde-arriba'></div>
              <div className='bordes-superiores borde-abajo'></div>
              <div className='borde-atras'>
                <img className='portada__sinopsis' data-atropos-offset='0' src={Sinopsis} alt="Portada de Nuestra Historia" />
              </div>
            </>
          }
        >
          <div className='portada__fondo'></div>
          <img className='portada__imagen' data-atropos-offset='0' src={NuestraHistoriaPortada} alt="Portada de Nuestra Historia" />
          <img className='portada__titulo' data-atropos-offset='20' src={Titulo1} alt="Portada de Nuestra Historia" />
          <img className='portada__titulo' data-atropos-offset='25' src={Titulo2} alt="Portada de Nuestra Historia" />
          <img className='portada__titulo' data-atropos-offset='20' src={Titulo3} alt="Portada de Nuestra Historia" />
        </Atropos>
      </div>
    </Link>
  )
}

export default Portada