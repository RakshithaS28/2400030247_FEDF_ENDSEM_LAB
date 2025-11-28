import React, { useReducer } from "react";
import { attendanceReducer, initialState } from "./AttendanceReducer";

const AttendanceTracker = () => {
  const [state, dispatch] = useReducer(attendanceReducer, initialState);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Student Attendance Tracker</h2>

      {state.students.map((student) => (
        <div key={student.id} style={{ marginBottom: "10px" }}>
          <strong>{student.name}</strong> — Status: {student.status}
          <br />
          <button
            onClick={() => dispatch({ type: "MARK_PRESENT", payload: student.id })}
            style={{ marginRight: "5px" }}
          >
            Present
          </button>
          <button
            onClick={() => dispatch({ type: "MARK_ABSENT", payload: student.id })}
          >
            Absent
          </button>
        </div>
      ))}

      <button
        style={{ marginTop: "15px", background: "orange", padding: "8px 20px" }}
        onClick={() => dispatch({ type: "RESET" })}
      >
        RESET
      </button>

      <hr />

      <h3>Final Attendance</h3>
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Attendance Status</th>
          </tr>
        </thead>
        <tbody>
          {state.students.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AttendanceTracker;
