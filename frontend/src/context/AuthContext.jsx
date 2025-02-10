// import { createContext, useContext, useState } from "react";

// const AuthContext = createContext();

// export function AuthProvider({ children }) {
//   const [user, setUser] = useState(null);

//   return (
//     <AuthContext.Provider value={{ user, setUser }}>
//       {children}
//     </AuthContext.Provider>
//   );
// }

// // ✅ Ensure `useAuth` is exported
// export function useAuth() {
//   return useContext(AuthContext);
// }







import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();  // ✅ Ensure `AuthContext` is exported

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}
