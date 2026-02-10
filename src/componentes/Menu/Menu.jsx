import { useNavigate } from "react-router-dom";
import MenuLateral from "../MenuLateral";

function Menu() {
  const navigate = useNavigate();

  const handleNavigate = (opcionMenu) => {
    if (!opcionMenu) return;

    if (opcionMenu.tipo === "admin") {
      navigate(opcionMenu.ruta);
      return;
    }

    if (opcionMenu.tipo === "docente") {
      navigate(`/funcionalidaddocente/${opcionMenu.id}`);
      return;
    }

    if (opcionMenu.tipo === "estudiante") {
      navigate(`/funcionalidadestudiante/${opcionMenu.id}`);
      return;
    }
  };

  return <MenuLateral onNavigate={handleNavigate} />;
}

export default Menu;
