import { useState } from "react"
import styles from '../Estilos.module.css/Dash.module.css'
import Todo from '../Components/Todo'
import AddTask from "./AddTask"
function Dash (){
    
    const [colocar, setColocar] = useState([
        {
            id: 1,
            text: "Criar funcionalidade x no system",
            category: "trabalho",
            isCompleted: false,
        },
        {
            id: 2,
            text: "Ir a faculdade",
            category: "pessoal",
            isCompleted: false,
        },
        {
            id: 3,
            text: "estudos react",
            category: "estudos",
            isCompleted: false,
        }
    ])

    const addTasks = (text, category) =>{
            
        const newTaks = [...colocar, {
            id: Math.floor(Math.random() * 1000),
            text,
            category,
            isCompleted: false
        }]

        setColocar(newTaks)
     }
    return(
        
        <>
            <div className={styles.app}>
                <h1>Lista de tarefas</h1>
                <div className={styles.todo_list}>
                    {colocar.map((toDo) => (
                       <Todo key={toDo.id} toDo = {toDo}/>
                    ))}
                </div>
                <AddTask addTasks = {addTasks}/>
            </div>
        </>
    )
}

export default Dash
