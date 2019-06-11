import React from 'react'

function Modal(props) {
    if(!props.show){
        return null;
    }
    return (
        <div className="mv-modal">
            <div className="mv-modal-box-img">
                {/* <span>{props.id}</span> */}
                <span style={{cursor: 'pointer'}} onClick={props.close}>X</span>
                {/* <div></div> */}
                <img alt="images" src={props.Image}/>
            </div>
        </div>
    )
}

export default Modal