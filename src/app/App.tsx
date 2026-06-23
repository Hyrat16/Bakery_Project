import { ListProdProvider } from "./shared/contexts/listProvider";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes/AppRoutes";
import { SalesItensProvider } from "./shared/contexts/salesProvider";

export function App() {
  return (
    <ListProdProvider>
      <SalesItensProvider>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </SalesItensProvider>
    </ListProdProvider>
  );
}

export default App;
