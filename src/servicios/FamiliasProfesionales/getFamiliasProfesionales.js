function getFamiliasProfesionales(){
    return fetch("https://mocki.io/v1/6aa45bda-3735-494f-9c1a-d8a35c4e2a87").then(
        (response)=>{return (response.json())}
        ).catch((error)=>"Error")
}
export default getFamiliasProfesionales;