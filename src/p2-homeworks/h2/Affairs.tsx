import React, {useState} from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import fs from './Affairs.module.css'
type InAffairType = {_id: number,name: string,priority: string }


type AffairsPropsType = { // need to fix any
    data: AffairType
    setFilter: (f: FilterType) => void
    deleteAffairCallback: (_id: number) => void
}


function Affairs(props: AffairsPropsType) {
    const [cls,setCls]=useState('all');
    const mappedAffairs = props.data.map((a: InAffairType) => (
            <Affair // should work
                key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
                affair={a}
                deleteAffairCallback={props.deleteAffairCallback}
            />
    ))

    const setAll = () => {
        props.setFilter("all")
        setCls('all')
    } // need to fix
    const setHigh = () => {
        props.setFilter('high')
        setCls('high')
    }
    const setMiddle = () => {
        props.setFilter('middle')
        setCls('middle')
    }
    const setLow = () => {
        props.setFilter('low')
        setCls('low')
    }
    let st1=fs.buttons+' '+(cls==='all'?fs.active:'')
    let st2=fs.buttons+' '+(cls==='high'?fs.active:'')
    let st3=fs.buttons+' '+(cls==='middle'?fs.active:'')
    let st4=fs.buttons+' '+(cls==='low'?fs.active:'')
    return (
        <div>
            <div className={fs.someClass}>
                {mappedAffairs}
            </div>

            <div className={fs.buttons}>
                <button className={st1} onClick={setAll}>All</button>
                <button className={st2} onClick={setHigh}>High</button>
                <button className={st3} onClick={setMiddle}>Middle</button>
                <button className={st4} onClick={setLow}>Low</button>
            </div>
        </div>
    )
}

export default Affairs
