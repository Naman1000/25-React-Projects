
import React from 'react'

const Modal = ({id, header, body, footer, onClose}) => {
  return (
    <div id={id || "Modal"} className='modal'  >
        <div className='modal-content'>
            <div className='header'>
                <span onClick={onClose} className='close-modal-icon'>&times;</span>
                {header ? header : <h2>Header</h2>}
            </div>
            <div className='body'>
                {body ? (
                    body) : ( 
                <div>
                    <p>This is Modal body</p>
                    </div>
                    )}
            </div>
            <div className='footer'>
                {footer ? footer : <p>Footer</p>}
            </div>
        </div>
        
      
    </div>
  )
}

export default Modal
