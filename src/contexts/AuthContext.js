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
  loading: true,
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

    case 'STOP_LOADING':
      return { ...state, loading: false };

    default:
      throw new Error(`Unrecognized type ${type}`);
  }
};

export const AuthProvider = ({ children }) => {
  const initialState = {
    isAuth: false,
    user: null,
    loading: true,
  };

  const [state, defaultDispatch] = useReducer(reducer, initialState);
  const dispatch = (type, payload) => defaultDispatch({ type, payload });

  const me = async () => {
    try {
      const res = await Axios.get('auth/me');
      dispatch('Login', res.data);
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log(e);
    } finally {
      dispatch('STOP_LOADING');
    }
  };

  useEffect(() => { me(); }, [state.isAuth]);

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
