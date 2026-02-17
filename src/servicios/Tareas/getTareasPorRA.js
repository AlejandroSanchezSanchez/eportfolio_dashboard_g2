function getTareasPorRA(){
    return fetch("https://mocki.io/v1/35a32ae8-b570-4575-a82a-a4880266b003").then(
        (response)=>{return (response.json())}
        ).catch((error)=>"Error")
}
export default getTareasPorRA;