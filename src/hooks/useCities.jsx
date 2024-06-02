import { useContext } from "react";
import { CitiesContext } from "../contexts/CitiesContext";

function useCities() {
  const context = useContext(CitiesContext);
  if (context === undefined)
    throw new Error("CititesContext was used outside of the CitiesProvider");
  return context;
}

export { useCities };
