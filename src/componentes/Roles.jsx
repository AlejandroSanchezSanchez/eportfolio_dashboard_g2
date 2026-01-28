import { useUser } from "../contexts/UserContext";

function Roles(props){

    const { user } = useUser();

    return (

            <aside>
                <p>ROLES {props.menu}</p>
                <p>NOMBRE: {user.name}</p>
                <p>ROL: {user.rol}</p>
            </aside>
    
    )

}
export default Roles