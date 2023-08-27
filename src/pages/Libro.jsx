import '../assets/css/Libro.css'

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BsFillArrowLeftCircleFill } from 'react-icons/bs'
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from 'react-icons/io'

import NuestraHistoriaPortada from './../assets/img/imagen.png'
import Titulo1 from './../assets/img/titulo1.png'
import Titulo2 from './../assets/img/titulo2.png'
import Titulo3 from './../assets/img/titulo3.png'
import Sinopsis from './../assets/img/sinopsis.png'

import Pagina1 from './../assets/img/pagina-1.png'
import Pagina2 from './../assets/img/pagina-2.png'
import Pagina3 from './../assets/img/pagina-3.png'
import Pagina4 from './../assets/img/pagina-4.png'
import Pagina5 from './../assets/img/pagina-5.png'
import Pagina6 from './../assets/img/pagina-6.png'
import Pagina7 from './../assets/img/pagina-7.png'
import Pagina8 from './../assets/img/pagina-8.png'
import Pagina9 from './../assets/img/pagina-9.png'
import Pagina10 from './../assets/img/pagina-10.png'
import Pagina11 from './../assets/img/pagina-11.png'
import Pagina12 from './../assets/img/pagina-12.png'
import Pagina13 from './../assets/img/pagina-13.png'
import Pagina14 from './../assets/img/pagina-14.png'

import HTMLFlipBook from "react-pageflip";

function Libro(props) {
  const [ libroWidth, setLibroWidth  ] = useState(200)
  const [ libroHeight, setLibroHeight ] = useState(250)
  const [ pagActual, setPagActual ] = useState(0)
  const [ habiPort, setHabiPort ] = useState(true)

  const paginas = [
    {
      lado: 'left',
      imagen: Pagina1
    },
    {
      lado: 'right',
      imagen: Pagina2
    },
    {
      lado: 'left',
      imagen: Pagina3
    },
    {
      lado: 'right',
      imagen: Pagina4
    },
    {
      lado: 'left',
      imagen: Pagina5
    },
    {
      lado: 'right',
      imagen: Pagina6
    },
    {
      lado: 'left',
      imagen: Pagina7
    },
    {
      lado: 'right',
      imagen: Pagina8
    },
    {
      lado: 'left',
      imagen: Pagina9
    },
    {
      lado: 'right',
      imagen: Pagina10
    },
    {
      lado: 'left',
      imagen: Pagina11
    },
    {
      lado: 'right',
      imagen: Pagina12
    },
    {
      lado: 'left',
      imagen: Pagina13
    },
    {
      lado: 'right',
      imagen: Pagina14
    },
  ]

  function calcularTamaño(tipo) {
    const windWidth = window.innerWidth
    const elemento = document.querySelector('.contenido__historia')
    const tamaño = elemento.clientWidth
    let calculo;

    if(windWidth > 800) calculo = tamaño*(34/100)
    else calculo = tamaño*(100/100)

    setLibroWidth(calculo)
    setLibroHeight(calculo + (calculo*(50/100)))
  }

  function calcularWindow() {
    const windWidth = window.innerWidth

    setHabiPort(windWidth > 800 ? false : true)
  }

  useEffect(() => {
    calcularWindow()
  })

  useEffect(() => {
    calcularTamaño()
  }, [libroWidth])

  return (
    <div className='container-libro'>
      <div className='container-libro__contenido'>
        <div className='caja__flecha-regreso'>
          <Link className='flecha-regreso' to={'/'}><BsFillArrowLeftCircleFill /></Link>
        </div>
        <div className={`contenido__historia ${pagActual !== 0 ? 'historia-activa' : ''}`}>
          <HTMLFlipBook 
            width={libroWidth} 
            height={libroHeight} 
            flippingTime={1500}
            showCover={true}
            usePortrait={habiPort}
            onFlip={(e) => setPagActual(e.data)}
          >
            <div className="demoPage demoPage-portada">
              <img className='img-1' src={NuestraHistoriaPortada} alt="foto" />
              <img src={Titulo1} alt="foto" />
              <img src={Titulo2} alt="foto" />
              <img src={Titulo3} alt="foto" />
            </div>
            {
              paginas.map((pag, index) => {
                return (
                  <div className={`demoPage ${pag.lado}` }key={index}>
                    <img src={pag.imagen} alt="Imagen" />
                    <span>{index + 1}</span>
                  </div>
                )
              })
            }
            <div className="demoPage demoPage-portada">
            <img src={Sinopsis} alt="foto" />
            </div>
          </HTMLFlipBook>
        </div>
      </div>
    </div>
  )
}

export default Libro