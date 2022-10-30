import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import axios from "axios";
import ListGroup from 'react-bootstrap/ListGroup';
import Details from './details';

const Fabrica = (props) =>  {
    var botonId=props.a
    var btn=0;
    var menor=props.a-2
    const [pokemones, setPokemones] = useState([]);
    useEffect(() => {
        const obtenerPokemones = async () => {
            const result = await axios.get('http://localhost:8080/pokemones');
            setPokemones(result.data)
        }
        obtenerPokemones()
    }, [])

    return (

        <div class="col">
            <div class="row gx-0">
                <div class="p-1 border bg-light">
                    {
                        pokemones.map((pokemones, i) => {
                            return i < props.a && i > props.b ? (
                                <img src={pokemones.foto} width="50%" />
                            ) : null
                        })}

                    <div class="container text-center">
                        <a id="car">

                            {
                                pokemones.map((pokemones, i) => {
                                    return i < props.a && i > props.b ? (

                                        <a>{pokemones.nombre}</a>
                                    ) : null
                                })}
                        </a>
                    </div>

                    <div class="row align-items-center">
                        <a>
                            {
                                pokemones.map((pokemones, i) => {
                                    return i < props.a && i > props.b ? (
                                        <a>{pokemones.descripcion}</a>
                                    ) : null
                                })}
                        </a>
                    </div>
                    <br />
                    <div>
                        <Details Id={props.a} titulo={props.titulo}/>
            
        </div>
                </div>
            </div>
        </div>
    )

}

export default Fabrica