import { Routes, Route, Navigate } from "react-router-dom";
import { useToken } from "../contexts/TokenContext";

import NuevaEvidencia from "./NuevaEvidencia";
import FuncionalidadEstudiante from "./FuncionalidadEstudiante";
import FuncionalidadDocente from "./FuncionalidadDocente";

function Dashboard() {
  const { token } = useToken();

  return (
    <main>
      <p>MAIN {token}</p>

      <Routes>
        <Route path="/" element={<NuevaEvidencia />} />
        <Route path="/funcionalidadestudiante/:modulo" element={<FuncionalidadEstudiante />}/>
        <Route path="/funcionalidaddocente/:modulo" element={<FuncionalidadDocente />}/>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </main>
  );
}

export default Dashboard;
