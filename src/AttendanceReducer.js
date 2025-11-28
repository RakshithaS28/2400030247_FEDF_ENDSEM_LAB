export const initialState = {
  students: [
    { id: 1, name: "Ram", status: "Not Marked" },
    { id: 2, name: "Sita", status: "Not Marked" },
    { id: 3, name: "Charan", status: "Not Marked" }
  ]
};

export const attendanceReducer = (state, action) => {
  switch (action.type) {
    case "MARK_PRESENT":
      return {
        ...state,
        students: state.students.map((student) =>
          student.id === action.payload
            ? { ...student, status: "Present" }
            : student
        )
      };
    case "MARK_ABSENT":
      return {
        ...state,
        students: state.students.map((student) =>
          student.id === action.payload
            ? { ...student, status: "Absent" }
            : student
        )
      };
    case "RESET":
      return initialState;
    default:
      return state;
  }
};
