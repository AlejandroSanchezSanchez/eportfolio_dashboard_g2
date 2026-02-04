import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  List,
  ListItemButton,
  ListItemText,
  Typography
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Link } from "react-router-dom";

import useRoles from "../hooks/useRoles";
import useMisModulosImpartidos from "../hooks/useMisModulosImpartidos";
import useMisModulosMatriculados from "../hooks/useMisModulosMatriculados";

import opcionesMenu from "../mocks/mock-administrador";

function MenuLateral() {
  const { lista: roles } = useRoles();
  const { lista: impartidos } = useMisModulosImpartidos();
  const { lista: matriculados } = useMisModulosMatriculados();

  return (
    <>
      {roles.includes("administrador") && (
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Administrador</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <List>
              {opcionesMenu.administrador.map((op, i) => (
                <ListItemButton key={i} component={Link} to={op.ruta}>
                  <ListItemText primary={op.nombre} />
                </ListItemButton>
              ))}
            </List>
          </AccordionDetails>
        </Accordion>
      )}

      {roles.includes("docente") && (
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Docente</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <List>
              {impartidos.map(modulo => (
                <ListItemButton
                  key={modulo.id}
                  component={Link}
                  to={`/funcionalidaddocente/${modulo.id}`}
                >
                  <ListItemText primary={modulo.nombre} />
                </ListItemButton>
              ))}
            </List>
          </AccordionDetails>
        </Accordion>
      )}

      {roles.includes("estudiante") && (
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Estudiante</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <List>
              {matriculados.map(modulo => (
                <ListItemButton
                  key={modulo.id}
                  component={Link}
                  to={`/funcionalidadestudiante/${modulo.id}`}
                >
                  <ListItemText primary={modulo.nombre} />
                </ListItemButton>
              ))}
            </List>
          </AccordionDetails>
        </Accordion>
      )}
    </>
  );
}
export default MenuLateral;
