import { useContext, useReducer } from "react";

const AuthContext = useContext();
const FAKE_USER = {
    name: "Jack",
    email: "jack@example.com",
    password: "qwerty",
    avatar: "https://i.pravatar.cc/100?u=zz",
  };

  
  const initialState = {
    user: null,
    isAuthintecated: false,
  };

  function reducer(state, action) {
    switch (action.type) {
      case "login":
        return {
          user: action.payload,
          isAuthintecated: true,
        };

      case "logout":
        return {
          ...state,
          user: null,
          isAuthintecated: false,
        };
      default:
        throw new Error("UNKOWN ACTION");
    }
  }



function AuthProvider({ children }) {
  const [{ user, isAuthintecated }, dispatch] = useReducer(
    reducer,
    initialState
  );


  // Always be updated at the same time --< useReducer()
  function login(email, password) {
    if(email === FAKE_USER.email && password=== FAKE_USER.password)
    dispatch({type:"login", payload: FAKE_USER})
  }
  function logout() {}

  return (
    <AuthContext.Provider value={{ user, isAuthintecated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);

  if (contex === undefined)
    throw new Error("AuthContext was used outside AuthProvider");
}

export {AuthProvider, useAuth}