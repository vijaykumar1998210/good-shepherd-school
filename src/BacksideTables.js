import React from "react";
import BacksideT1 from "./BacksideT1";
import Backsidet2 from "./Backsidet2";
import Backsidet3 from "./Backsidet3";
import Backsidet4 from "./Backsidet4";
import Backsidet5 from "./Backsidet5";
import "./backsidetables.css";
import TeacherRemarks from "./TeacherRemarks";
import TeacherSign from "./TeacherSign";
function BacksideTables() {
  return (
    <div className="backsidetables">
      <BacksideT1 />
      <Backsidet2 />
      <Backsidet3 />
      <Backsidet4 />
      <Backsidet5 />
      <TeacherRemarks />
      <TeacherSign />
      <div
        className="bg_gradient"
        style={{
          backgroundImage:
            `Url(${process.env.PUBLIC_URL + '/Images/IMG-20210216-WA0010-removebg-preview.png'})`,
          backgroundRepeat: "no-repeat",
        }}
      ></div>
    </div>
  );
}

export default BacksideTables;
