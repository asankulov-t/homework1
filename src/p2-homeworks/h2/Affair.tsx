import React from 'react'
import af from './Affair.module.css'

type InAffairType = {_id: number,name: string,priority: string }
type AffairPropsType = {
    // key не нужно типизировать
    affair: InAffairType // need to fix any
    deleteAffairCallback: (_id: number) => void // need to fix any
}

type callBack={
    callBack:(id:number)=>void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = (callBack: callBack) => callBack
    const colors=af.level+' '+af[props.affair.priority]
    return (
            <div className={af.global}>
                    <div>{props.affair.name}</div>
                    <div className={af.affair}>
                        <div className={colors}>{props.affair.priority}</div>
                        <button onClick={() => deleteCallback(props.deleteAffairCallback(props.affair._id))}>X</button>
                    </div>
            </div>
        )
    // need to fix
    // return (
    //     // <div className={af.global}>
    //     //     <div className={af.affair}>
    //     //         {someText}
    //     //     </div>
    //     //
    //     // </div>
    // )
}

export default Affair
