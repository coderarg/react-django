import "./Formtodo.css";

function Formtodo() {
  return (
    <form className="todo_form">
      <label className="todo_form-label" htmlFor="task_input">
        Task Name
      </label>
      <input
        id="task_input"
        className="todo_form-input"
        type="text"
        placeholder="Drink water"
      />
      <button className="todo_form-button">Create Task</button>
    </form>
  );
}

export default Formtodo;
