function Cabecera({user}){

    return (

            <header>
                <p>NOMBRE: {user.nombre}</p>
                <p>ROL: {user.rol}</p>

            </header>
    
    )

}
export default Cabecera