import React from "react";
import Classes from "./Classes";
import Styles from "./Styles";
import ConditionalOutput from "./ConditionalOutput";
import TodoList from "./ToDo/TodoList"
import {Link} from "react-router-dom";


const Labs = () => {
  return (
      <>
        <h1>Labs</h1>
        <TodoList/>
        <ConditionalOutput/>
        <Styles/>
        <Classes/>
        <Link to="/hello">
          Hello
        </Link> |
        <Link to="/tuiter">
          Tuiter
        </Link>

      </>
  )
};

export default Labs;