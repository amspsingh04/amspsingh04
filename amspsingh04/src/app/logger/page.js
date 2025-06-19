'use client';
import { useState, useEffect } from 'react';
import styles from './page.module.css';

export default function LoggerPage() {
  const [entries, setEntries] = useState([]);
  const [form, setForm] = useState({ date: '', activity: '', tag: '', done: false });

  useEffect(() => {
    fetch('/api/logs')
      .then((res) => res.json())
      .then(setEntries);
  }, []);

  const addEntry = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/logs', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });
    const data = await res.json();
    setEntries((prev) => [...prev, data]);
    setForm({ date: '', activity: '', tag: '', done: false });
  };

  const toggleDone = (id) => {
    setEntries((prev) => prev.map((e) => (e.id === id ? { ...e, done: !e.done } : e)));
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>📋 Activity Logger</h1>

      <form onSubmit={addEntry} className={styles.form}>
        <input
          type="date"
          required
          value={form.date}
          onChange={(e) => setForm({ ...form, date: e.target.value })}
        />
        <input
          type="text"
          placeholder="Activity"
          required
          value={form.activity}
          onChange={(e) => setForm({ ...form, activity: e.target.value })}
        />
        <input
          type="text"
          placeholder="Tag"
          value={form.tag}
          onChange={(e) => setForm({ ...form, tag: e.target.value })}
        />
        <label>
          Done?
          <input
            className={styles.checkbox}
            type="checkbox"
            checked={form.done}
            onChange={(e) => setForm({ ...form, done: e.target.checked })}
          />
        </label>
        <button type="submit">Add</button>
      </form>

      <table className={styles.table}>
        <thead>
          <tr>
            <th>Date</th>
            <th>Activity</th>
            <th>Tag</th>
            <th>Done</th>
          </tr>
        </thead>
        <tbody>
          {entries.map((e) => (
            <tr key={e.id}>
              <td>{e.date}</td>
              <td>{e.activity}</td>
              <td>{e.tag}</td>
              <td>
                <input
                  className={styles.checkbox}
                  type="checkbox"
                  checked={e.done}
                  onChange={() => toggleDone(e.id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
