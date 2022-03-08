import React, {ChangeEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: Array<UserType> // need to fix any
    addUserCallback: (name: string) => void // need to fix any
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [errorMessage, setErrorMessage] = useState<string>('Вы не ввели имя') // need to fix any
    const [activeError, setActiveError]=useState(false)
    console.log(users)
    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // need to fix any
        if (!e.target.value){
            setActiveError(true)
        }
        else {
            setName(e.target.value)
            setActiveError(false)
        }
         // need to fix
    }
    const onOffSetActiveError=(active:boolean)=>{
        setActiveError(active)
    }
    const addUser = () => {
        if (name !== '') {
            alert(`Hello ${name} !`);
            addUserCallback(name.trim());
            setName('')
            console.log('Help')
        }

        // need to fix
    }

    const totalUsers = users.length// need to fix

    return (
        <div>
            <Greeting
                activeError={activeError}
                name={name}
                setNameCallback={setNameCallback}
                addUser={addUser}
                error={errorMessage}
                totalUsers={totalUsers}
            />
        </div>
    )
}

export default GreetingContainer
