import React from "react";

const IndustryForm = props => (
  <div className="field">
    <label className="label">What industry are you competing in?</label>
    <div className="control">
      <input className="input" type="text" name="industry" onChange={props.handleInputChange} placeholder="Ex. Real Estate" />
    </div>
    <div className="control">
      <button type="submit" className="button" onClick={()=>props.handleSubmit()}>Submit</button>
    </div>
  </div>
);

export default IndustryForm;
