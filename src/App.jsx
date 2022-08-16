import { Routes, Route } from "react-router-dom";
import Inicio from "./components/Inicio";
import Formulario from "./components/Formulario";
import "./App.css";
import { FormProvider } from "./context/contextoFormulario";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <FormProvider>
          <Routes>
            <Route path="/" exact element={<Inicio />} />
            <Route path="/formularioEntrada" element={<Formulario />} />
          </Routes>
        </FormProvider>
      </QueryClientProvider>
    </div>
  );
}

export default App;
