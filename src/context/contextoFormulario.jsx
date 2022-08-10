import { createContext, useContext, useReducer } from "react";
import propTypes from 'prop-types';

const FormContext = createContext();

/**
 * @function useFormContext 
 * Wrapper method for generating safely the context array containing the form states and dispatch method.
 * @returns {array} [state, dispatch] First element is the form states object, and the second is the dispatch method.
 */
export function useFormContext() {
  const formData = useContext(FormContext);

  if (!formData) {
    throw new Error(
      "Para consumir o estado do provider FormContextProvider é necessário ser um componente filho dela"
    );
  }

  return formData;
}

const initialState = {
  coach: {
    name: "",
    lastName: "",
    email: "",
  },
  pokemon: {
    name: "",
    type: "",
    element: "",
    height: 0,
    age: "",
  },
};

/**
 *  Reducer function of coach and pokemon form states.
 * @param {object} state Stores the form values for coach and pokemon.
 * @param {object} state.coach Stores the form values for the coach.
 * @param {string} state.coach.name Coach's first name.
 * @param {string} state.coach.lastName Coach's last name.
 * @param {string} state.coach.email Coachs's e-mail.
 * @param {object} action Object containing the required instructions for state dispatch.
 * @param {string} action.type Specifies wich set of states to alter.
 * @param {object} action.payload Object containing the value and instructions to alter the target set of states.
 * @param {string} action.payload.field Specifies from which form field the value should be changed.
 * @param {string} action.payload.value Value to change the specified state.
 * @returns {state} Altered state of coach and pokemon form.
 */
function reducer(state, action) {
  switch(action.type) {
    case 'UPDATE_COACH':
      return {
        ...state,
        coach: {
          ...state.coach,
          [action.payload.field]: action.payload.value
        }
      };
    case 'UPDATE_POKEMON':
      return {
        ...state,
        pokemon: {
          ...state.pokemon,
          [action.payload.field]: action.payload.value
        }
      };
    default:
      return state;
  }
}

/**
 * 
 * @param {object} prop 
 * @param {object} prop.children 
 * @returns Form context provider.
 */
export function FormProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <FormContext.Provider value={[state, dispatch]}>{children}</FormContext.Provider>;
}

FormProvider.propTypes = {
  children: propTypes.oneOfType([propTypes.element, propTypes.arrayOf(propTypes.element)])
}