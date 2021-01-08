import React, {
  createContext,
  useReducer,
  useContext,
  useEffect,
} from 'react';
import Axios from 'axios';

const StateContext = createContext({
  isAuth: false,
  user: null,
});

const DispatchContext = createContext(null);

const reducer = (state, { type, payload }) => {
  switch (type) {
    case 'Login':
      return {
        ...state,
        isAuth: true,
        user: payload,
      };

    case 'Logout':
      return {
        ...state,
        isAuth: false,
        user: null,
      };

    default:
      throw new Error(`Unrecognized type ${type}`);
  }
};

export const AuthProvider = ({ children }) => {
  const initialState = {
    isAuth: false,
    user: null,
  };

  const [state, defaultDispatch] = useReducer(reducer, initialState);
  const dispatch = (type, payload) => defaultDispatch({ type, payload });

  useEffect(() => {
    Axios.get('auth/me')
      .then((res) => dispatch('Login', res.data))
      // eslint-disable-next-line no-console
      .catch((err) => console.log(err));
  }, [state.isAuth]);

  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={state}>
        { children }
      </StateContext.Provider>
    </DispatchContext.Provider>
  );
};

export const useAuthState = () => useContext(StateContext);
export const useAuthDispatch = () => useContext(DispatchContext);
