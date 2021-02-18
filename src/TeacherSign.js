import React from "react";
import "./teachersign.css";

function TeacherSign() {
  return (
    <>
      <div className="teacherSign">
        <div className="sign_box1">
          <input type="text" className="sign_input" />
          <label htmlFor="" className="sign_label">
            Class teacher
          </label>
        </div>
        <div className="sign_box1">
          <input type="text" className="sign_input" />
          <label htmlFor="" className="sign_label">
            Parent
          </label>
        </div>
        <div className="sign_box1">
          <input type="text" className="sign_input" />
          <label htmlFor="" className="sign_label">
            Principal
          </label>
        </div>
      </div>
    </>
  );
}

export default TeacherSign;
