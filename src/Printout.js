import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import "./App.css";
import BacksideTables from "./BacksideTables";
import './printout.css'


export class ComponentToPrint extends React.PureComponent {
    render() {
      return (
          <>
        
        <BacksideTables />
        </>
      );
    }
  }
  
  const Example = () => {
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
      content: () => componentRef.current,
    });
  
    return (
      <div className="printout">
        <ComponentToPrint ref={componentRef} />
        <button className="print" onClick={handlePrint}>Print this out!</button>
      </div>
    );
  };
  export default Example