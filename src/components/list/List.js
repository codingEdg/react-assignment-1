import React, { useState, useEffect } from 'react'
import "./list.css"
import useFetchData from '../../methods/useFetch'
import API from '../../assets/api'
import Card from '../card/Card'
import Spinner from '../../coreComponents/spinner/Spinner'

const List = () => {
    const { data, setData, isLoading, error } = useFetchData(API.userListUrl)

    function removeUser(userId) {
        setData(data.filter(user => user.id !== userId))
    }
    return (
        <div className="card-list" >
            {isLoading || data == null ? <Spinner /> : data.map((user) => {
                return (

                    <div className="cards" key={user.id} ><Card removeUser={removeUser} user={user} /></div>
                )
            })}
        </div>
    )
}

export default List