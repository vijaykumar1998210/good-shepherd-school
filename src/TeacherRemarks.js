import React from "react";
import "./teacherremarks.css";

function TeacherRemarks() {
  return (
    <div className="teacherRemarks">
      <div className="teacher_box1">
        <label htmlFor="" className="teacher_label">
          Class Teacher's remarks :
        </label>

        <input type="text" className="teacher_input" />
      </div>
      <div className="teacher_box1">
        <label htmlFor="" className="teacher_label">
          Results :
        </label>

        <input type="text" className="teacher_input" />
      </div>
      <div className="teacher_box1">
        <label htmlFor="" className="teacher_label">
          New Session Begins :
        </label>

        <input type="text" className="teacher_input" />
      </div>
    </div>
  );
}

export default TeacherRemarks;
