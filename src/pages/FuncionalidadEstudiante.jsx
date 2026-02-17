import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useState } from 'react';

import MiProgresoCompleto from '../componentes/FuncionalidadesEstudiante/MiProgresoCompleto';
import SubirNuevaEvidencia from '../componentes/FuncionalidadesEstudiante/SubirNuevaEvidencia';
import MisRevisionesPendientes from '../componentes/FuncionalidadesEstudiante/MisRevisionesPendientes';


const FuncionalidadEstudiante = (props) => {
    const [opcionSeleccionada, setOpcionSeleccionada] = useState(0);

    function handleChange(event, nuevaOpcion) {
        setOpcionSeleccionada(nuevaOpcion);
        
    }

    return (
        <>
            <Tabs value={opcionSeleccionada} onChange={handleChange} aria-label="basic tabs example">
                <Tab key={0} label="Mi progreso completo" />
                <Tab key={1} label="Subir nueva evidencia" />
                <Tab key={2} label="Mis revisiones pendientes" />
            </Tabs>

            
            {opcionSeleccionada === 0 && <MiProgresoCompleto />}
            {opcionSeleccionada === 1 && <SubirNuevaEvidencia />}
            {opcionSeleccionada === 2 && <MisRevisionesPendientes />}
        </>
    );
};

export default FuncionalidadEstudiante;
