import "./Card.css"

const Card = () => {
  return(
    <div className="card">
      <section>
        <button className="card-button">FRONT END</button>
        <h2 className="card-titulo">Challenge React</h2>
        <p className="card-descripcion">Este challenge es una forma de aprendizaje. 
          Es un mecanismo donde podrás comprometerte en la resolución de un problema para poder 
          aplicar todos los conocimientos adquiridos en la formación React.
        </p>
      </section>
      <section className="card-player">
        <img src="../../../public/img/player.png" alt="imagen-player"/>
      </section>
    </div>
  )
}

export default Card