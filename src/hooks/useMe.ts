import { useLocalStorage } from "./useLocalStorage";

const useMe = () => {
  const [value] = useLocalStorage("isLoggedIn", null);

  return { data: value };
};

export default useMe;
