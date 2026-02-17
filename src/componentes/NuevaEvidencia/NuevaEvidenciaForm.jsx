import { useForm } from 'react-hook-form';
import { TextField, Button } from '@mui/material';

const NuevaEvidenciaForm = ({ tarea }) => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      tarea_id: tarea ? tarea.id : '',
      estudiante_id: '',
      url: '',
      descripcion: '',
      estado_validacion: 'pendiente'
    }
  });

  const onSubmit = (data) => {
    console.log('Evidencia Creada:', data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        label="URL"
        variant="outlined"
        fullWidth
        {...register('url', { required: 'La URL es obligatoria', pattern: { value: /https?:\/\/\S+/, message: 'URL no válida' } })}
        error={!!errors.url}
        helperText={errors.url?.message}
      />
      <TextField
        label="Descripción"
        variant="outlined"
        fullWidth
        multiline
        {...register('descripcion', { required: 'La descripción es obligatoria' })}
        error={!!errors.descripcion}
        helperText={errors.descripcion?.message}
      />
      <Button type="submit" variant="contained">Añadir Evidencia</Button>
    </form>
  );
};

export default NuevaEvidenciaForm;
