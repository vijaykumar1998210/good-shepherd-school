import React from "react";
import './backsidet4.css'

function Backsidet4() {
  return (
    <div className="backsidet4">
      <table class="table">
      <thead>
      <tr>
        <th className="t4head head2_bg">Co-scholastic areas</th>
        <th className="t4head head2_bg">term 1</th>
        <th className="t4head head2_bg">term 2</th>
      </tr>
    </thead>
        <tbody>
          <tr>
            <td className="t5head">Air Education</td>
            <td> <input className="table6_input" type="text"/></td>
            <td> <input className="table6_input" type="text"/></td>
          </tr>
          <tr>
            <td className="t5head">Health & physical Education</td>
            <td><input className="table6_input" type="text"/></td>
            <td><input className="table6_input" type="text"/></td>
          </tr>
          <tr>
            <td className="t5head">discipline</td>
            <td><input className="table6_input" type="text"/></td>
            <td><input className="table6_input" type="text"/></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Backsidet4;