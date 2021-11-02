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
    const [error, setError] = useState<string>('Вы не ввели имя') // need to fix any
    console.log(users)
    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // need to fix any
        setName(e.target.value) // need to fix
    }
    const addUser = () => {
        if (name !== '') {
            alert(`Hello ${name} !`);
            addUserCallback(name.trim());
            setName('')
        }

        // need to fix
    }

    const totalUsers = users.length// need to fix

    return (
        <div>
            <Greeting
                name={name}
                setNameCallback={setNameCallback}
                addUser={addUser}
                error={error}
                totalUsers={totalUsers}
            />
        </div>
    )
}

export default GreetingContainer
