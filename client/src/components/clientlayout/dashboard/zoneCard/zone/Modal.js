import React from "react";
import Spot from "./Spot";

function Modal({ spot, id, spotClick }) {
  return (
    <div
      className="modal fade"
      id={id}
      tabIndex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Modal title
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body display-flex">
            {spot.map(spot => (
              <Spot
                key={spot.id}
                id={spot.id}
                zoneid={id}
                spot={spot.spot}
                color={spot.isAllocated ? "secondary" : "primary"}
                status={spot.isAllocated && "disabled"}
                spotClick={spotClick}
              />
            ))}
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
            <button type="button" className="btn btn-primary">
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
