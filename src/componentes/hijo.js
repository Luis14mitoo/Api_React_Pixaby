import React, { Component } from "react";

class Hijo extends Component {
  busquedaRef = React.createRef();

  obtenerDatos = (e) => {
    e.preventDefault();

    //leer ref
    const termino = this.busquedaRef.current.value;

        this.props.datosBusqueda(termino);

  };

  render() {
    return (
      <div>
       

        <form onSubmit={this.obtenerDatos}>
          <div className="row">
       

            <div className="form-group col-md-8">
              <input
                type="text"
                ref={this.busquedaRef}
                className="form-control form-control-lg"
                placeholder="Buscar tu imagen. Ejemplo: futbol "
              />
            </div>
            <div className="form-group col-md-8">
              <input
                type="submit"
                className="btn btn-danger btn-block"
                value="Buscar"
              />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Hijo;
