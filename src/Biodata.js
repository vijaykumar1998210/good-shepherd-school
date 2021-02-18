import React from "react";
import "./biodata.css";
import Photo from "./Photo";


function Biodata() {
  return (
    <div className="biodata">
      <h1 className="biodata_head">Achievement Record</h1>
      <Photo />
      <div className="bio_photo">
        {/* <input type="file" className="bio_photo_input"/> */}
        <label htmlFor="" className="acedmic_head">
          acdemic year : <input type="text" className="photo_input" />
        </label>
      </div>
      <div className="bio_profile">
        <h1 className="bio_profile_head">Student Profile</h1>

        <div className="profile_box1">
          <label htmlFor="" className="profile_label">
            name of the student :
          </label>

          <input type="text" className="profile_input" />
        </div>
        <div className="profile_box1">
          <label htmlFor="" className="profile_label">
            Roll No :
          </label>

          <input type="text" className="profile_input" />
        </div>
        <div className="profile_box1">
          <label htmlFor="" className="profile_label">
            Class & Section :
          </label>

          <input type="text" className="profile_input" />
        </div>
        <div className="profile_box1">
          <label htmlFor="" className="profile_label">
            Mother's Name :
          </label>

          <input type="text" className="profile_input" />
        </div>
        <div className="profile_box1">
          <label htmlFor="" className="profile_label">
            Father's Name :
          </label>

          <input type="text" className="profile_input" />
        </div>
        <div className="profile_box1">
          <label htmlFor="" className="profile_label">
            Date of Birth :
          </label>

          <input type="text" className="profile_input" />
        </div>
        <div className="profile_box1">
          <label htmlFor="" className="profile_label">
            Admission Number :
          </label>

          <input type="text" className="profile_input" />
        </div>
      </div>
    </div>
  );
}

export default Biodata;
