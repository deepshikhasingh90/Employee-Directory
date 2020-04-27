import React from "react";
import RenderedResult from "./RenderedResult";
// import "../styles/DataTable.css";

function ResultHeader({ key,firstName,lastName,phone,email,icon,dob,handleNameSort,handleDOBSort }) {
  return (
    <div className="container mt-5">
      <table className="table table-striped table-hover table-condensed">
        <thead className="thead">
          <tr>
            <th className="col" style={{ width: "10%" }}>Image</th>
            <th className="col" key="Name" style={{ width: "15%" }} onClick={handleNameSort}>Name  <i className="fa fa-sort" aria-hidden="true"></i></th>
            <th className="col" style={{ width: "20%" }}>Email</th>
            <th className="col" style={{ width: "20%" }}>Phone</th>
            <th className="col" key="DOB" style={{ width: "20%" }} onClick={handleDOBSort}>DOB<i className="fa fa-sort" aria-hidden="true"></i></th>
          </tr>
        </thead>
        < RenderedResult
          key= {key}
          firstName={firstName}
          lastName={lastName}
          phone={phone}
          email={email}
          icon={icon}
          dob={dob}
        />
      </table>
    </div>
  )
};

export default ResultHeader;