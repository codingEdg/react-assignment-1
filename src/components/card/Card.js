import "./card.css"
import { useState } from "react"
import Modal from "../modal/Modal"
import { AiFillEdit, AiFillDelete, AiOutlineHeart, AiFillHeart, AiOutlineMail, AiOutlinePhone, AiOutlineGlobal } from 'react-icons/ai'

const Card = ({ removeUser, user, setData, id }) => {
    const [heart, setHeart] = useState(true)
    const [isModalOpen, setIsModalOpen] = useState(false)

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    }



    return (

        <div className="card-container">
            {isModalOpen && <Modal id={id} setData={setData} user={user} onRequestClose={toggleModal} />}

            <img className="w-full" src={`https://avatars.dicebear.com/v2/avataaars/${user.username}.svg?options[mood][]=happy`} alt="Sunset in the mountains" />
            <div className="info-container">
                <div className="heading"><h4 >{user.name}</h4></div>
                <div className="text-info"> <AiOutlineMail /><p  >{user.email}</p> </div>
                <div className="text-info"><AiOutlinePhone /><p  >{user.phone}</p> </div>
                <div className="text-info"><AiOutlineGlobal /><p >{user.website}</p> </div>

            </div>
            <ul className="icons  px-6 pt-4 pb-2">
                <li className="heartIcon" onClick={() => heart ? setHeart(false) : setHeart(true)} > {heart ? <AiOutlineHeart /> : <AiFillHeart />}</li>
                <li className="pipe" >|</li>
                <li className="editIcon" onClick={() => setIsModalOpen(true)} ><AiFillEdit /></li>
                <li className="pipe" >|</li>
                <li className="deleteIcon" onClick={() => removeUser(user.id)} ><AiFillDelete /></li>
            </ul>
        </div>

    )
}

export default Card