// // src/hooks/useAuth.js
// import { useContext } from "react";
// import { AuthContext } from "../context/AuthContext";

// export const useAuth = () => {
//   return useContext(AuthContext);
// };

// // 


import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";  // ✅ Correct path

export function useAuth() {
  return useContext(AuthContext);
}
