 import React from "react";
 import { useState } from "react";

 const AddWork = ()=> {
    const [type, setType]= useState("")
    const [numb, setNumb]= useState("")
    const [date, setDate]= useState("")
    const[endDate, setEndDate]= useState("")
    const [info, setInfo]= useState("")
    const [result, setResult]= useState([])

    function handleSubmit(event){
        
        event.preventDefault()
        const works = {
            workType: type,
            workNumb: numb,
            workDate: date,
            workEnd: endDate,
            workInfo: info
        }

        setResult(works)
        
    }

    return(
        <header className="header">
            <span className="title">Add your work safely</span>
            <hr></hr>
            <form onSubmit={handleSubmit} className="form">
                <label>Тип</label>
                <input 
                type="text"
                id="type"
                value={type}
                onChange= {(event)=> setType(event.target.value)}>
                </input>

                <label>Регистрационен номер</label>
                <input 
                type="text"
                id="numb"
                value={numb}
                onChange= {(event)=> setNumb(event.target.value)}>
                </input>

                <label>Пристигнала на:</label>
                <input 
                type="date"
                id="date"
                value={date}
                onChange= {(event)=> setDate(event.target.value)}>
                </input>

                <label>Краен срок:</label>
                <input 
                type="date"
                id="endDate"
                value={endDate}
                onChange= {(event)=> setEndDate(event.target.value)}>
                </input>

                <label>Допълнителна информация</label>
                <input 
                type="text"
                id="info"
                value={info}
                onChange= {(event)=> setInfo(event.target.value)}>
                </input>

                <button type="submit" className="submit-btn">Add me</button>
            </form>
        </header>
    )
 }

 export default AddWork