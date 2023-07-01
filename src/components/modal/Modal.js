

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

    // return (

    //     <div className="ant-modal-wrap" tabIndex="-1" role="dialog" aria-labelledby="rcDialogTitle1">
    //         <div className="ant-modal" style={{ width: '520px', transformOrigin: '85px 99px' }}>
    //             <div tabIndex="0" style={{ width: '0px', height: '0px', overflow: 'hidden' }}>sentinelStart</div>
    //             <div className="ant-modal-content">
    //                 <button aria-label="Close" className="ant-modal-close">
    //                     <span className="ant-modal-close-x">
    //                         <i aria-label="icon: close" className="anticon anticon-close ant-modal-close-icon">
    //                             <svg viewBox="64 64 896 896" className="" data-icon="close" width="1em" height="1em" fill="currentColor" aria-hidden="true">
    //                                 <path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path>
    //                             </svg>
    //                         </i>
    //                     </span>
    //                 </button>
    //                 <div className="ant-modal-header">
    //                     <div className="ant-modal-title" id="rcDialogTitle1">Basic Modal</div>
    //                 </div>
    //                 <div className="ant-modal-body">
    //                     <form className="ant-form ant-form-horizontal">
    //                         <div className="ant-row ant-form-item">
    //                             <div className="ant-col ant-form-item-label ant-col-xs-24 ant-col-sm-8">
    //                                 <label htmlFor="name" className="ant-form-item-required" title="Name">Name</label>
    //                             </div>
    //                             <div className="ant-col ant-form-item-control-wrapper ant-col-xs-24 ant-col-sm-16">
    //                                 <div className="ant-form-item-control has-success">
    //                                     <span className="ant-form-item-children">
    //                                         <input type="text" id="name" data-__meta="[object Object]" data-__field="[object Object]" className="ant-input" value="Ervin Howell" />
    //                                     </span>
    //                                 </div>
    //                             </div>
    //                         </div>
    //                         <div className="ant-row ant-form-item">
    //                             <div className="ant-col ant-form-item-label ant-col-xs-24 ant-col-sm-8">
    //                                 <label htmlFor="email" className="ant-form-item-required" title="Email">Email</label>
    //                             </div>
    //                             <div className="ant-col ant-form-item-control-wrapper ant-col-xs-24 ant-col-sm-16">
    //                                 <div className="ant-form-item-control has-success">
    //                                     <span className="ant-form-item-children">
    //                                         <input type="text" id="email" data-__meta="[object Object]" data-__field="[object Object]" className="ant-input" value="Shanna@melissa.tv" />
    //                                     </span>
    //                                 </div>
    //                             </div>
    //                         </div>
    //                         <div className="ant-row ant-form-item">
    //                             <div className="ant-col ant-form-item-label ant-col-xs-24 ant-col-sm-8">
    //                                 <label htmlFor="phone" className="ant-form-item-required" title="Phone">Phone</label>
    //                             </div>
    //                             <div className="ant-col ant-form-item-control-wrapper ant-col-xs-24 ant-col-sm-16">
    //                                 <div className="ant-form-item-control has-success">
    //                                     <span className="ant-form-item-children">
    //                                         <input type="text" id="phone" data-__meta="[object Object]" data-__field="[object Object]" className="ant-input" value="010-692-6593 x09125" />
    //                                     </span>
    //                                 </div>
    //                             </div>
    //                         </div>
    //                         <div className="ant-row ant-form-item">
    //                             <div className="ant-col ant-form-item-label ant-col-xs-24 ant-col-sm-8">
    //                                 <label htmlFor="website" className="ant-form-item-required" title="Website">Website</label>
    //                             </div>
    //                             <div className="ant-col ant-form-item-control-wrapper ant-col-xs-24 ant-col-sm-16">
    //                                 <div className="ant-form-item-control has-success">
    //                                     <span className="ant-form-item-children">
    //                                         <input type="text" id="website" data-__meta="[object Object]" data-__field="[object Object]" className="ant-input" value="anastasia.net" />
    //                                     </span>
    //                                 </div>
    //                             </div>
    //                         </div>
    //                     </form>
    //                 </div>
    //                 <div className="ant-modal-footer">
    //                     <div>
    //                         <button type="button" className="ant-btn">
    //                             <span>Cancel</span>
    //                         </button>
    //                         <button type="button" className="ant-btn ant-btn-primary">
    //                             <span>OK</span>
    //                         </button>
    //                     </div>
    //                 </div>
    //             </div>
    //             <div tabIndex="0" style={{ width: '0px', height: '0px', overflow: 'hidden' }}>sentinelEnd</div>
    //         </div>
    //     </div>

    // )


};

export default Modal