import { useToken } from "../contexts/TokenContext"

function Dashboard(props){


    const { token } = useToken()

    return (

            <main>
                <p>MAIN {token}</p>
            </main>
    
    )

}
export default Dashboard