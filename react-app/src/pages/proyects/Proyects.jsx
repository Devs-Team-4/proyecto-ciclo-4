import proyect from './proyects.css'

export default function proyects() {
    return (
        <div className="proyects">
            <div>
                <h1>Proyectos Registrados</h1>
                <div className="container1">
                    <div className="card">
                        <div className="img" />
                        <h4 className="nameproject">Proyecto 1</h4>
                        <p className="parrafo">Lorem ipsum, dolor sit amet consectetur dolor sit amet consectetur dolor sit</p>
                        <p><span>Owner: </span>  Cristhian</p>
                        <p><span>Topic: </span>  Astronomia</p>
                        <a href="#">Leer mas</a>
                    </div>
                    <div className="card">
                        <div className="img img2" />
                        <h4 className="nameproject">Proyecto 2</h4>
                        <p className="parrafo">Lorem ipsum, dolor sit amet consectetur dolor sit amet consectetur dolor sit</p>
                        <p><span>Owner: </span>  Cristhian</p>
                        <p><span>Topic: </span>  Astronomia</p>
                        <a href="#">Leer mas</a>
                    </div>
                    <div className="card">
                        <div className="img img3" />
                        <h4 className="nameproject">Proyecto 3</h4>
                        <p className="parrafo">Lorem ipsum, dolor sit amet consectetur dolor sit amet consectetur dolor sit</p>
                        <p><span>Owner: </span>  Cristhian</p>
                        <p><span>Topic: </span>  Astronomia</p>
                        <a href="#">Leer mas</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
