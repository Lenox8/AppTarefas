import React from "react";
import styles from "../Estilos.module.css/Button.module.css";
import style from "../Estilos.module.css/AddTask.module.css";
import { useState } from "react";
function AddTask({addTasks}) {
  const [value, setValue] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!value || !category) return;
      //add task
    addTasks(value, category)
    //cleaning camps
    setValue("")
    setCategory("")
  
    //clean camps
  };

  return (
    <>
      <div className={style.todo_form}>
        <h2>Criar tarefa</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={value}
            placeholder="Nome da tarefa"
            onChange={(event) => setValue(event.target.value)}
          />
          <select value={category} onChange={(event) => setCategory(event.target.value)}>
            <option value="">Selecione uma categoria</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Pessoal">Pessoal</option>
            <option value="Estudos">Estudos</option>
          </select>
          <button type="submit" id={styles.btn}>
            Criar tarefa
          </button>
        </form>
      </div>
    </>
  );
}

export default AddTask;
