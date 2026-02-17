function getRoles(){
    return fetch("https://mocki.io/v1/b3ec8760-5cf8-487e-a876-62addde210d3").then(
        (response)=>{return (response.json())}
        ).catch((error)=>"Error")
}
export default getRoles;