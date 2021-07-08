import { createContext, useReducer } from "react";
import "./App.css";
import Parent from "./Kids";

function reducer(state, action) {
  switch (action.type) {
    case "1":
      state = 1;
      return state;

    case "2":
      state = 2;
      return state;

    case "3":
      state = 3;
      return state;

    case "4":
      state = 4;
      return state;

    case "5":
      state = 5;
      return state;

    default:
      break;
  }
}

export const ChildContext = createContext("1");

function App() {
  const [favChild, dispatch] = useReducer(reducer, 1);

  return (
    <div>
      <h2>Your Favourite Child {favChild}</h2>
      <select
        style={{
          width: 80,
        }}
        value={favChild}
        onChange={(e) => dispatch({ type: e.target.value })}
      >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
      <ChildContext.Provider value={favChild}>
        <Parent />
      </ChildContext.Provider>
    </div>
  );
}

export default App;
