

import "./modal.css"
import { useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai"

const Modal = ({ user, onRequestClose }) => {
    // Use useEffect to add an event listener to the document
    useEffect(() => {
        function onKeyDown(event) {
            if (event.keyCode === 27) {
                // Close the modal when the Escape key is pressed
                onRequestClose();
            }
        }

        // Prevent scolling
        document.body.style.overflow = "hidden";
        document.addEventListener("keydown", onKeyDown);

        // Clear things up when unmounting this component
        return () => {
            document.body.style.overflow = "visible";
            document.removeEventListener("keydown", onKeyDown);
        };
    });

    return (
        <div className="modal__backdrop">
            <div className="modal__container">
                <div className="modal__title">
                    <h3>Basic Modal</h3>
                    <div className="close"><AiOutlineClose onClick={() => onRequestClose()} /> </div>
                </div>
                <form className="form">
                    <div className="form-name">
                        <label htmlFor="name">Name: </label>
                        <input type="name" name="name" id="name" placeholder={user.name} required />
                    </div>
                    <div className="form-email">
                        <label htmlFor="email">Email: </label>
                        <input type="email" name="email" id="email" placeholder={user.email} required />
                    </div>
                    <div className="form-mobile">
                        <label htmlFor="mobile">Phone: </label>
                        <input type="mobile" name="mobile" id="mobile" placeholder={user.phone} required />
                    </div>
                    <div className="form-website">
                        <label htmlFor="website">Website: </label>
                        <input type="url" name="website" id="website" placeholder={user.website} required />
                    </div>

                </form>
                <div className="submit">
                    <button className="cancel-btn">Cancel</button>
                    <button type="submit" className="submit-btn" >OK</button>
                </div>

            </div>
        </div>
    );
};

export default Modal