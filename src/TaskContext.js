import { createContext, useContext, useReducer } from "react";

const initialState = {
    tasks: [
        {
            id: 0,
            task: "Code",
        },
        {
            id: 1,
            task: "Eat",
        }
    ],
    theme: "light",
}

function reducer(state, action) {
    switch (action.type) {
        case 'addTask':
            return { ...state, tasks: [...state.tasks, action.payload] };

        case 'deleteTask':
            return { ...state, tasks: state.tasks.filter(task => task.id !== action.payload) }
        default: throw new Error("Unknown Action")
    }
}

const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <AppContext.Provider value={{ state, dispatch }}>
            {children}
        </AppContext.Provider>

    )
};

const useAppContext = () => {
    const context = useContext(AppContext);
    if (context === undefined) throw new Error("Context was used outside its provider");
    return context;
}

export { AppProvider, useAppContext };
