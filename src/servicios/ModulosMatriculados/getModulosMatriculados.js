function getModulosMatriculados(){
    return fetch("https://mocki.io/v1/2b432be1-bd6d-46a6-8057-38cfd0f28c6a").then(
        (response)=>{return (response.json())}
        ).catch((error)=>"Error")
}
export default getModulosMatriculados;