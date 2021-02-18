import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import Tables from "./Tables";
import Header from "./Header";
import Biodata from "./Biodata";
import "./printout.css";

export class Component1ToPrint extends React.PureComponent {
  render() {
    return (
      <>
        <Header />
        <Biodata />
        <Tables />
      </>
    );
  }
}

const Example1 = () => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div className="printout">
      <Component1ToPrint ref={componentRef} />
      <button className="print" onClick={handlePrint}>
        Print this out!
      </button>
    </div>
  );
};
export default Example1;
