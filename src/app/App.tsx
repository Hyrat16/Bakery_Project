import { ListProdProvider } from "./shared/contexts/useFilterProd";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes/AppRoutes";

export function App() {
  return (
    <ListProdProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </ListProdProvider>
  );
}

export default App;
