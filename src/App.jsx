import React, {useEffect, useState} from 'react';
import {firebase} from './firebase'


function App() {

  const [tareas, setTareas] = useState([])
  const [tarea, setTarea] = useState("")

  useEffect(() => {

    const obtenerDatos = async() => {

      try{

        const db = firebase.firestore()
        const data = await db.collection("tareas").get()
        //console.log(data.docs)
        const arrayData = data.docs.map(doc => ({ id: doc.id, ...doc.data() }))
        //console.log(arrayData)
        setTareas(arrayData)

      }catch (error) {

      }

    }
    obtenerDatos()
  }, [])

  const agregar = async(e) => {
    e.preventDefault()

    if(!tarea.trim()){
      console.log('esta vacio')
      return
    }

    try {

      const db = firebase.firestore()
      const nuevaTarea = {
        name: tarea,
        fecha: Date.now()
      }

      const data = await db.collection('tareas').add(nuevaTarea)

      setTareas([
        ...tareas,
        {...nuevaTarea, id: data.id}
      ])

      setTarea('')

    } catch (error) {

    }
    console.log(tarea)
  }

  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-6">
          <ul className="list-group">
            {
              tareas.map(item => (
              <li className="list-group-item" key={item.id}>
                {item.name}
              </li>
              ))
            }
          </ul>
        </div>
        <div className="col-md-6">
          <h3>Formulario</h3>
          <form onSubmit={agregar}>
            <input
              type="text"
              placeholder="Ingrese tarea"
              className="form-control mb-2"
              onChange={e => setTarea(e.target.value)}
              value={tarea}
            />
            <button
              className="btn btn-dark btn-block"
              type="submit"
            >
              Agregar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
