

import "./modal.css"
import { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai"
import { debounce } from "lodash";

const Modal = ({ user, onRequestClose, setData, id }) => {

    // Use useEffect to add an event listener to the document
    useEffect(() => {
        function onKeyDown(event) {
            console.log(event.keyCode)
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

    const [userData, setUserData] = useState({})


    function updateData() {
        let userValue = JSON.stringify(userData)
        localStorage.setItem(`${userData.name}`, userValue)
        setData(prev => prev.map(user => {
            if (user.id === id) {
                let newUser = { ...user, ...userData }
                return newUser
            } else return user
        }))
        onRequestClose()
    } // onsubmit merge the updated object details in the main array

    const handleInputChange = (e) => {
        debouncedEditData(e);
    }  // taking input and passing to the debounce function

    const debouncedEditData = debounce((e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    }, 500); // Debounce delay in milliseconds



    return (
        <div className="modal__backdrop">
            <div className="modal__container">
                <div className="modal__title">
                    <h3>Basic Modal</h3>
                    <div className="close"><AiOutlineClose onClick={() => onRequestClose()} /> </div>
                </div>
                <form className="form">
                    <div className="form-name">
                        <span style={{ color: "red", paddingRight: "5px" }} >* </span><label htmlFor="name">Name: </label>
                        <input onChange={(e) => handleInputChange(e)} type="name" name="name" id="name" placeholder={user.name} required />
                    </div>
                    <div className="form-email">
                        <span style={{ color: "red", paddingRight: "5px" }} >* </span><label htmlFor="email">Email: </label>
                        <input onChange={(e) => handleInputChange(e)} type="email" name="email" id="email" placeholder={user.email} required />
                    </div>
                    <div className="form-mobile">
                        <span style={{ color: "red", paddingRight: "5px" }} >* </span><label htmlFor="phone">Phone: </label>
                        <input onChange={(e) => handleInputChange(e)} type="mobile" name="phone" id="phone" placeholder={user.phone} required />
                    </div>
                    <div className="form-website">
                        <span style={{ color: "red", paddingRight: "5px" }} >* </span><label htmlFor="website">Website: </label>
                        <input onChange={(e) => handleInputChange(e)} type="url" name="website" id="website" placeholder={user.website} required />
                    </div>

                </form>
                <div className="submit">
                    <button onClick={() => onRequestClose()} className="cancel-btn">Cancel</button>
                    <button onClick={() => updateData()} type="submit" className="submit-btn" >OK</button>
                </div>

            </div>

        </div>
    );



};

export default Modal