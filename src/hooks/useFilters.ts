import { useState, useEffect } from "react";
import { getAgents, getClients, getProducts } from "api";
type FiltersState = {
  clients: Array<any>;
  products: Array<any>;
  agents: Array<any>;
};

const useFilters = () => {
  const [filters, setFilters] = useState<FiltersState>({
    clients: [],
    products: [],
    agents: [],
  });
  useEffect(() => {
    Promise.all([getClients(), getProducts(), getAgents()]).then(
      (values: any) => {
        setFilters({
          clients: values[0],
          products: values[1],
          agents: values[2],
        });
      }
    );
  }, []);

  return filters;
};

export default useFilters;
