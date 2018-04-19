import React from "react";

const DemographicForm = props => (
    <div className="field">
        <label className="label">What demographic would you like to research?</label>
        <div className="control">
            <input className="input" type="text" name="location" onChange={props.handleInputChange} placeholder="Ex. Age" />
        </div>
        <div className="control">
            <button type="submit" className="button" onClick={() => props.handleSubmit()}>Submit</button>
        </div>
    </div>
);

export default DemographicForm;
