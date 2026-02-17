import NuevaEvidenciaForm from "./NuevaEvidenciaForm";
import SelectorTarea from "./SelectorTarea";
import React, { useState } from 'react';


const NuevaEvidencia = () => {

  const [tareaSeleccionada, setTareaSeleccionada] = useState(null);

  const handleTareaSeleccionada = (tarea) => {
    setTareaSeleccionada(tarea);
  };

  return (
    <div>
      <SelectorTarea onSelect={handleTareaSeleccionada} />
      <NuevaEvidenciaForm tarea={tareaSeleccionada} />
    </div>
  );
};
export default NuevaEvidencia;