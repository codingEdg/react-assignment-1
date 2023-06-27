import React, { useState } from 'react'
import "./list.css"
import useFetchData from '../../methods/useFetch'
import API from '../../assets/api'
import Card from '../card/Card'

const List = () => {
    const { data, setData, isLoading, error } = useFetchData(API.userListUrl)

    function removeUser(userId) {
        setData(data.filter(user => user.id !== userId))
    }
    return (
        <div className="card-list" >
            {data == null ? <h1>Loading...</h1> : data.map((user) => {
                return (

                    <div className="cards" key={user.id} ><Card removeUser={removeUser} user={user} /></div>
                )
            })}
        </div>
    )
}

export default List