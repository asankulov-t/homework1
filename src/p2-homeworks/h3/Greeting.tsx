import React, {ChangeEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = name == '' ? s.error : ''; // need to fix with (?:)
    const changeName = (e: ChangeEvent<HTMLInputElement>) => {
        setNameCallback(e)
    }
    return (
        <div>
            <div className={s.someClass}>
                <input value={name} onChange={changeName} onBlur={changeName} className={inputClass}/>
                <button onClick={addUser}>add</button>
                <span>{totalUsers ? totalUsers : 0}</span>
            </div>
            <div>
                {name === '' ? <div>
                    <span className={s.red}>{error}</span>
                </div> : null}
            </div>
        </div>
    )
}

export default Greeting
