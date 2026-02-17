function getModulosImpartidos(){
    return fetch("https://mocki.io/v1/36f6bd04-c20e-444c-ae06-2e7cabe096c8").then(
        (response)=>{return (response.json())}
        ).catch((error)=>"Error")
}
export default getModulosImpartidos;