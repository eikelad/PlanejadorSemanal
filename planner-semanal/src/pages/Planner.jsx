import React, { useState, useEffect } from "react";
import "../styles/global.css";

const Planner = () => {
  const daysOfWeek = [
    { name: "Domingo", color: "#F4A261" },
    { name: "Segunda", color: "#2A9D8F" },
    { name: "Terça", color: "#3A86FF" },
    { name: "Quarta", color: "#E76F51" },
    { name: "Quinta", color: "#264653" },
    { name: "Sexta", color: "#457B9D" },
    { name: "Sábado", color: "#F4A261" },
  ];

  const [month, setMonth] = useState("");
  const [tasks, setTasks] = useState(() => {
    return JSON.parse(localStorage.getItem("tasks")) || {};
  });
  const [notes, setNotes] = useState(() => {
    return localStorage.getItem("notes") || "";
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    localStorage.setItem("notes", notes);
  }, [notes]);

  const handleTaskChange = (day, value) => {
    setTasks({ ...tasks, [day]: value });
  };

  return (
    <div className="planner-container">
      <div className="planner-header">
        <h1>PLANEJAMENTO SEMANAL</h1>
        <label>
          Mês:
          <input
            type="text"
            value={month}
            onChange={(e) => setMonth(e.target.value)}
            className="month-input"
            placeholder="Digite o mês..."
          />
        </label>
      </div>

      <div className="planner-grid">
        {daysOfWeek.map((day) => (
          <div key={day.name} className="planner-column">
            <h2 style={{ backgroundColor: day.color }}>{day.name}</h2>
            <textarea
              value={tasks[day.name] || ""}
              onChange={(e) => handleTaskChange(day.name, e.target.value)}
              placeholder="Digite suas tarefas..."
            />
          </div>
        ))}
      </div>

      <div className="notes-section">
        <label>Anotações:</label>
        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Escreva suas anotações aqui..."
        />
      </div>
    </div>
  );
};

export default Planner;
