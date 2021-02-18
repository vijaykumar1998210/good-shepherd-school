import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./tables.css";

function Tables() {
  return (
    <div className="tables">
      <table className="table">
        <thead>
          <tr>
            <th colspan="4" className="head1 head1_bg">
              Key for grades
            </th>
          </tr>
        </thead>
        <thead>
          <tr>
            <th colspan="2" className="head1 head1_color">
              Scholastic Areas
            </th>
            <th colspan="2" className="head1 head1_color">
              co-scholastic Areas
            </th>
          </tr>
        </thead>
        <thead>
          <tr>
            <th className="head2 head2_bg">Marks Range</th>
            <th className="head2 head2_bg">Grades</th>
            <th className="head3 head2_bg" colspan="2">
              On a 3-Point(A-C) Grading style
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="head4 head1_color" >91-100</td>
            <td className="head4 head1_color">A1</td>
            <td rowSpan="3" className="Grade head1_color">
              A
            </td>
            <td rowSpan="3" className="head4 head1_color">
              Outstanding
            </td>
          </tr>
          <tr>
            <td className="head4 head1_color">81-90</td>
            <td className="head4">A2</td>
          </tr>
          <tr>
            <td className="head4 head1_color">71-80</td>
            <td className="head4 head1_color">b1</td>
          </tr>
          <tr>
            <td className="head4 head1_color">61-70</td>
            <td className="head4 head1_color"> b2</td>
            <td rowSpan="2" className="Grade">
              B
            </td>
            <td rowSpan="2" className="head4 head1_color">
              Very Good
            </td>
          </tr>
          <tr>
            <td className="head4 head1_color">51-60</td>
            <td className="head4 head1_color">c1</td>
          </tr>
          <tr>
            <td className="head4 head1_color">41-50</td>
            <td className="head4 head1_color">c2</td>
            <td rowSpan="3" className="Grade head1_color">
              C
            </td>
            <td rowSpan="3" className="head4 head1_color">
              fair
            </td>
          </tr>
          <tr>
            <td className="head4 head1_color">33-50</td>
            <td className="head4 head1_color">D</td>
          </tr>
          <tr>
            <td className="head4 head1_color">33 & below</td>
            <td className="head4 head1_color">E (Needs improvement)</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Tables;
