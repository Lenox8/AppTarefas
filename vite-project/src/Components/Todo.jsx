import React from "react";
import styles from '../Estilos.module.css/Button.module.css'
import style from '../Estilos.module.css/Todo.module.css'
const Todo = ({toDo}) => {
  return (
    <>
      <div className={style.todo}>
        <div className={style.content}>
          <p>{toDo.text}</p>
          <p className={style.category}>({toDo.category})</p>
        </div>
        <button id={styles.btnComplete}>Completar</button>
        <button id={styles.btnEliminar}>X</button>
      </div>
    </>
  );
};

export default Todo;
