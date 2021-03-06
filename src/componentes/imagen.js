import React from "react";

const Imagen = (props) => {
  const { pageURL, likes, userImageURL, tags, views } = props.imagen;
  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
      <div className="card">
        <img src={userImageURL} alt={tags} className="card-img-top" />

        <div className="car-body">
          <p className="card-text">{likes}Me gusta</p>
          <p className="card-text">{views}Visitas</p>

          <a href={pageURL} target="_blank"              className="btn btn-primary btn-block" >Ver imagen</a>
        </div>
      </div>
    </div>
  );
};

export default Imagen;
