import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useState } from 'react';

import PlanificarCriterios from './FuncionalidadesDocente/PlanificarCriterios';
import EvaluarEvidencias from './FuncionalidadesDocente/EvaluarEvidencias';
import AsignarRevisiones from './FuncionalidadesDocente/AsignarRevisiones';

const FuncionalidadDocente = (props) => {
    const [opcionSeleccionada, setOpcionSeleccionada] = useState(0);

    function handleChange(event, nuevaOpcion) {
        setOpcionSeleccionada(nuevaOpcion);
        
    }

    return (
        <>
            <Tabs value={opcionSeleccionada} onChange={handleChange} aria-label="basic tabs example">
                <Tab key={0} label="Planificar criterios" />
                <Tab key={1} label="Evaluar evidencias" />
                <Tab key={2} label="Asignar revisiones" />
            </Tabs>

            
            {opcionSeleccionada === 0 && <PlanificarCriterios />}
            {opcionSeleccionada === 1 && <EvaluarEvidencias />}
            {opcionSeleccionada === 2 && <AsignarRevisiones />}
        </>
    );
};

export default FuncionalidadDocente;
