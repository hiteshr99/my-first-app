function Todo() {
  const todos = [
    { id: 1, task: "Watch IPL Match" },
    { id: 2, task: "Practice React" },
    { id: 3, task: "Go to Gym" },
    { id: 4, task: "Complete Assignment" },
  ];

  return (
    <div style={{ margin: "20px" }}>
      <h2>Todo List</h2>

      <ul>
        {todos.map((item) => (
          <li key={item.id} style={{ marginBottom: "8px" }}>
            {item.task}
            <button style={{ marginLeft: "10px" }}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;