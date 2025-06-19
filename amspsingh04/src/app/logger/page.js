'use client';
import { useState, useEffect } from 'react';
import styles from './page.module.css'; // must match file name exactly

export default function LoggerPage() {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    fetch('/api/logs')
      .then(res => res.json())
      .then(setEntries);
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Activity Logger</h1>

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
          {entries.map(e => (
            <tr key={e.id}>
              <td>{e.date}</td>
              <td>{e.activity}</td>
              <td>{e.tag}</td>
              <td>
                <input
                  className={styles.checkbox}
                  type="checkbox"
                  checked={e.done}
                  disabled
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
