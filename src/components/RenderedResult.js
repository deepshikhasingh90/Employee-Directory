import React from "react";
import "../Style/RenderedResult.css";
import Moment from "moment";

const RenderedResult = (props, key) => {

 return (
  <tbody>
    <tr key={key}>
      <td data-th="Image" className="align-middle">
        <img alt={props.firstName} src={props.icon} className="img-responsive" />
      </td>
      <td data-th="Name" className="name-cell align-middle">{props.firstName} {props.lastName}</td>
      <td data-th="Email" className="align-middle" >{props.email}</td>
      <td data-th="Phone" className="align-middle">{props.phone} </td>
      <td data-th="DOB" className="align-middle">{props.dob.substring(0,10)}</td>
    </tr>
    </tbody>
    

  )

}

export default RenderedResult;