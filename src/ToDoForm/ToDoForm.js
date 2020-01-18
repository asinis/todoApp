import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './ToDoForm.css';

function ToDoForm() {

  const toDoInit = ""
  const toDoListInit = []
  const numberClass = ["todo-wrapper-color-a", "todo-wrapper-color-b", "todo-wrapper-color-c", "todo-wrapper-color-d" ];

  const [toDo, setToDo] = useState(toDoInit)
  const [toDoList, setToDoList] = useState(toDoListInit)

  const handleInputChange = (e) => {
    setToDo(e.currentTarget.value)
  }

  const getClassName = () => {
    return numberClass[Math.floor(toDoList.length % numberClass.length)];
  }

  const addToDoItem = () => {
    if (toDo == toDoInit)
      return;

    setToDoList([... toDoList, {
      value: toDo,
      color: getClassName()
    }]);

    setToDo("")
  }

  const deleteToDo = (i) => {
    const toDoListCopy = Object.assign([], toDoList);
    toDoListCopy.splice(i, 1)
    setToDoList(toDoListCopy)
  }

  return (
    <div>
      <h2 className="App">Todos</h2>
      <div className="offset-lg-4 col-lg-4 offset-md-4 col-md-4 offset-sm-3 col-sm-6">
        <div className="input-group">
          <input type='search' onChange={handleInputChange} id="txtToDo" value={toDo} placeholder='Enter todo here...' className='form-control' />
          <div className="input-group-append">
            <button className="btn btn-success" onClick={addToDoItem} type="button">Submit</button>  
          </div>
        </div>
      </div>
      <div className="offset-md-4 col-md-4 offset-sm-3 col-sm-6 text-align-default">
      {
        toDoList.map((item, index) => (
          <div key={index}>
            <br />
            <div className={"d-flex justify-content-between todo-wrapper " + (item.color)}>
                <div className="p-2 align-self-center">
                  <span className="pull-left font-weight-bold">{index + 1}) {item.value}</span>
                </div>
                <div className="p-2">
                  <input type="button" value="x" className="btn font-weight-bolder text-danger" onClick={deleteToDo.bind(this, index)} />
                </div>
              </div>
          </div>
        ))
      }
      </div>
    </div>
  );
}

export default ToDoForm;
