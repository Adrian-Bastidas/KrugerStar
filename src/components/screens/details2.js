import React from 'react'
import './styles.css'
import { useEffect, useState } from 'react'
import axios from "axios";

const Details = (props) => {
    const [pokemones, setPokemones] = useState([]);
    useEffect(() => {
        const obtenerPokemones = async () => {
            const result = await axios.get('http://localhost:8080/pokemones');
            setPokemones(result.data)
        }
        obtenerPokemones()
    }, [])

    return (
        <div>
                        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                Buscar

            </button>
            <div class="modal fade" id="segundo" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="staticBackdropLabel">
                            {
        pokemones.map((pokemones) => {
            return props.nombre==pokemones.nombre ? (
                <a>{
                    pokemones.nombre
                    }</a>
            ) :null
        })}
                            </h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div class="container text-center">
                                <div class="row justify-content-center">
                                    <div class="col-4">
                                    {
        pokemones.map((pokemones) => {
            return props.nombre==pokemones.nombre ? (
                <a>{
                    <img src={pokemones.foto} width="150%" />
                    }</a>
            ) :null
        })}

                                    </div>
                                    <div class="col-8">
                                        <h3>
                                        {
        pokemones.map((pokemones) => {
            return props.nombre==pokemones.nombre ? (
                <a>{
                    pokemones.nombre
                    }</a>
            ) :null
        })}
                                        </h3>
                                        <p id='descripcion'>
                                        {
        pokemones.map((pokemones) => {
            return props.nombre==pokemones.nombre ? (
                <a>{
                    pokemones.descripcion
                    }</a>
            ) :null
        })}
                                        </p>
                                        <b>Tipo(s):</b>                                                               {
        pokemones.map((pokemones) => {
            return props.nombre==pokemones.nombre ? (
                <a>{
                    pokemones.tipo1
                    }</a>
            ) :null
        })}
 {
        pokemones.map((pokemones) => {
            return props.nombre==pokemones.nombre ? (
                <a>{
                    pokemones.tipo2
                    }</a>
            ) :null
        })}
                                        <br />
                                        <b>Altura:</b>
                                        {
        pokemones.map((pokemones) => {
            return props.nombre==pokemones.nombre ? (
                <a>{
                    pokemones.altura
                    }</a>
            ) :null
        })}
                                        <b>Peso:</b>
                                        {
        pokemones.map((pokemones) => {
            return props.nombre==pokemones.nombre ? (
                <a>{
                    pokemones.peso
                    }</a>
            ) :null
        })}
                                            <br/>
                                            <b>Primeros movimientos</b>
                                            <br/>
                                            {
        pokemones.map((pokemones) => {
            return props.nombre==pokemones.nombre ? (
                <a>{
                    pokemones.movimiento1
                    }</a>
            ) :null
        })}
                                            {
        pokemones.map((pokemones) => {
            return props.nombre==pokemones.nombre ? (
                <a>{
                    pokemones.movimiento2
                    }</a>
            ) :null
        })}
                                            <br/>
                                            {
        pokemones.map((pokemones) => {
            return props.nombre==pokemones.nombre ? (
                <a>{
                    pokemones.movimiento3
                    }</a>
            ) :null
        })}
                                            {
        pokemones.map((pokemones) => {
            return props.nombre==pokemones.nombre ? (
                <a>{
                    pokemones.movimiento4
                    }</a>
            ) :null
        })}
                                    </div>
                                </div>
                            </div>


                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Cerrar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )

}


export default Details