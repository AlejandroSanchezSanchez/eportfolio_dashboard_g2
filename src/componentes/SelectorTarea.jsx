import tareasRA from '../mocks/mock-tareasRA';
import { Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import React, { useEffect, useState } from 'react';

const SelectorTarea = ({ onSelect }) => {
    const [tareas, setTareas] = useState([]);
    const [selectedTareaId, setSelectedTareaId] = useState("");

    useEffect(() => {
        setTareas(tareasRA.lista);
    }, []);

    const handleChange = (event) => {
        const selectedId = event.target.value;
        setSelectedTareaId(selectedId)
        onSelect(selectedId)
    };

    return (
        <div>
            <FormControl fullWidth>
                <InputLabel>Sin seleccionar</InputLabel>
                <Select value={selectedTareaId} onChange={handleChange}> 
                    {tareas.map((tarea) => (
                        <MenuItem key={tarea.id} value={tarea.id}> 
                            {tarea.observaciones}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
};

export default SelectorTarea;
