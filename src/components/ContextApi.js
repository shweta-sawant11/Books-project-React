import { createContext, useReducer } from "react";

export const Favcontext = createContext();

const ContextApi = ({ children }) => {

    const reducer = (state, action) => {
        switch (action.type) {

            case 'ADD':
                const tempstate = state.filter((book) => action.payload.id === book.id)
                if (tempstate.length > 0) {
                    return state
                }
                else {
                    return [...state, action.payload];
                }

            case 'REMOVE':
                const tempstate1 = state.filter((book) =>
                    book.id !== action.payload.id)

                return tempstate1;
            default:
                return state;
        }
    }
    const [state, dispatch] = useReducer(reducer, [])

    const info = { state, dispatch };
    return (
        <Favcontext.Provider value={info}>
            {children}
        </Favcontext.Provider>
    );
};

export default ContextApi;