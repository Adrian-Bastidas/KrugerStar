import React, { useEffect, useState } from 'react'
import './styles.css'
import Button from 'react-bootstrap/Button';
import axios from "axios";
import ListGroup from 'react-bootstrap/ListGroup';
import Details from './details';
import Details2 from './details2';
import Fabrica from './Fabrica';

function Home() {
  const [pokemones, setPokemones] = useState([]);
    useEffect(() => {
        const obtenerPokemones = async () => {
            const result = await axios.get('http://localhost:8080/pokemones');
            setPokemones(result.data)
        }
        obtenerPokemones()
    }, [])
  return (
    <div className='container text-center'>
      <div class="row align-items-center">
        <div class="col">
          <h1>PokeAPI Challenge</h1>
        </div>
      </div>
      <div class="row align-items-center">
        <div class="col">
          <h5>Aqui encontraras tu mejor directorio de pokemones</h5>
        </div>
      </div>
      <div class="row align-items-center" id="comienzoMenu">
        
        <Fabrica a="1" b="-1" titulo="hola1"/>
        <Fabrica a="4" b="2" titulo="hola2"/>

        <Fabrica a="7" b="5" titulo="hola3"/>
        <Fabrica a="10" b="8" titulo="hola4"/>
      </div>
      <div class="row align-items-center" id="comienzoMenu">
        <Fabrica a="12" b="10" titulo="hola5"/>
        <Fabrica a="13" b="11" titulo="hola6"/>
        <Fabrica a="16" b="14" titulo="hola7"/>
        <Fabrica a="19" b="17" titulo="hola8"/>
      </div>
      <div className="row align-items-center" id="comienzoMenu">

        <div className='col-3'>        <Fabrica a="21" b="19" titulo="hola9"/></div>
        <div className='col-3'>        <Fabrica a="23" b="21" titulo="hola10"/></div>
        <div className='col-3'>        <Fabrica a="25" b="23" titulo="hola11"/></div>
        <div className='col-3'>        <Fabrica a="27" b="25" titulo="hola12"/></div>
      </div>
    </div>
  )
}
export default Home
