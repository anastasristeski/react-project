import AppRoutes from "./AppRoutes/appRoutes";
import { AuthProvider } from "./components/context/AuthContextProvider";

function App() {
  return (

  <AuthProvider>
      <AppRoutes />
  </AuthProvider>

  );
}

export default App;
