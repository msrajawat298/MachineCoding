"use client";

import { useEffect, useState } from "react";
import DebounceDemo from "@/challenges/debounce";
import ThrottleDemo from "@/challenges/throttle";

export default function TodoApp() {
  const [items, setItems] = useState([]);
  const [text, setText] = useState("");
  const STORAGE_KEY = "todo-app-items";



  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setItems(JSON.parse(raw));
    } catch (e) {
      console.error(e);
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch (e) {
      console.error(e);
    }
  }, [items]);

  const addTodo = (e) => {
    e.preventDefault();
    const trimmed = text.trim();
    if (!trimmed) return;
    setItems((prev) => [...prev, { id: Date.now(), text: trimmed, done: false }]);
    setText("");
  };

  const toggleTodo = (id) =>
    setItems((prev) => prev.map((it) => (it.id === id ? { ...it, done: !it.done } : it)));

  const removeTodo = (id) => setItems((prev) => prev.filter((it) => it.id !== id));



  return (
    <div>
      <form onSubmit={addTodo} className="mb-3 d-flex gap-2">
        <input
          className="form-control"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add todo..."
        />
        <button className="btn btn-primary" type="submit">
          Add
        </button>
      </form>

      <div className="mb-4">
        <h5>Debounce vs Throttle Demo</h5>
        <div className="d-flex gap-3">
          <div style={{ width: "50%" }}>
            <DebounceDemo items={items} wait={500} />
          </div>

          <div style={{ width: "50%" }}>
            <ThrottleDemo items={items} wait={500} />
          </div>
        </div>
      </div>

      {items.length === 0 ? (
        <div style={{ color: 'var(--text-secondary)' }}>No todos yet</div>

      ) : (
        <ul className="list-group">
          {items.map((item) => (
            <li
              key={item.id}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              <div>
                <input
                  className="form-check-input me-2"
                  type="checkbox"
                  checked={item.done}
                  onChange={() => toggleTodo(item.id)}
                />
                <span style={{ textDecoration: item.done ? "line-through" : "none" }}>
                  {item.text}
                </span>
              </div>
              <button className="btn btn-sm btn-outline-danger" onClick={() => removeTodo(item.id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
