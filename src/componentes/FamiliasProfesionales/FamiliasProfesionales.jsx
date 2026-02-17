import useFamiliasProfesionales from "../../hooks/useFamiliasProfesionales"
import BasicTable from "../BasicTable/BasicTable";

function FamiliasProfesionales() {
    const { lista, buscando } = useFamiliasProfesionales()

    const columnas = [
        { header: "ID", accessor: "id" },
        { header: "Nombre", accessor: "nombre" },
        { header: "Descripción", accessor: "descripcion" },
    ];

    return (
        <div>
            <h2>Familias profesionales</h2>



            <BasicTable
                columns={columnas}
                data={lista}
                buscando={buscando}
            />

        </div>
    )
}

export default FamiliasProfesionales
