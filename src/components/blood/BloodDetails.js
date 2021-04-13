import React from 'react';

const BloodDetails = (props) => {
    const id = props.id;
    return(
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Blood Type- {id}</span>
                    <p>Hospital- KGMU</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Cost-5ooo</div>
                    <div>Requirement Status: Urgent</div>
                </div>
            </div>
        </div>
    )
}

export default BloodDetails