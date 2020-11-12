import React, { Component } from "react";

import Hijo from "./hijo";

import Resultado from "./resultado";

class Inicio_component extends Component {
  state = {
    termino: "",
    imagenes: [],
    pagina: "",
  };

  scroll = () => {
    const elemento = document.querySelector(".jumbotron");
    elemento.scrollIntoView("smooth", "start");
  };

  paginaAnterior = () => {
    let pagina = this.state.pagina;

    if (pagina === 1) return null;
    pagina -= 1;

    this.setState(
      {
        pagina,
      },
      () => {
        this.consultarApi();
      }
    );
   
    this.scroll();
  };

  paginaSiguiente = () => {
    let pagina = this.state.pagina;

    pagina += 1;

    this.setState(
      {
        pagina,
      },
      () => {
        this.consultarApi();
        this.scroll();
      }
    );
    
  };

  consultarApi = () => {
    const termino2 = this.state.termino;
    const pagina = this.state.pagina;

    const url = `https://pixabay.com/api/videos/?key=18402047-6b273aa47a4885b1bf151809d&q=${termino2}&per_page=30&page=${pagina}`;

    fetch(url)
      .then((respuesta) => respuesta.json())
      .then((resultado) => this.setState({ imagenes: resultado.hits }));
  };

  datosBusqueda = (termino) => {
    this.setState(
      {
        termino: termino,
        pagina: 1,
      },
      () => {
        this.consultarApi();
      }
    );
  };

  render() {
    return (
      <div>
        <div class="jumbotron">
          <p>Buscador de Imagenes</p>

          <hr class="my-4" />
        </div>
        <Hijo datosBusqueda={this.datosBusqueda} />
        <Resultado
          imagenes={this.state.imagenes}
          paginaAnterior={this.paginaAnterior}
          paginaSiguiente={this.paginaSiguiente}
        />
      </div>
    );
  }
}
export default Inicio_component;
