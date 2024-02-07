// import jwt from "jsonwebtoken";
type loginProps = {
  pwd: string | undefined;
};

export const login = ({ pwd }: loginProps) => {
  try {
    if (pwd !== process.env.REACT_APP_JWT_KEY) return false;
    localStorage.setItem("isLoggedIn", JSON.stringify(true));
    return true;
  } catch (error) {
    console.log(error);
  }
};
