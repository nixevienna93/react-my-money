import React, { useState } from 'react'
import { useSignup } from '../../hooks/useSignup'

import styles from './Signup.module.css'

const Signup = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [displayName, setDisplayName] = useState('')
    const { error, isPending, signup } = useSignup()

    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log(email, password, displayName)
        signup(email, password, displayName)
    }

  return (
    <form onSubmit={handleSubmit} className={styles['signup-form']}>
        <h2>Signup</h2>

        <label>
            <span>display name:</span>
            <input type="text" onChange={(e) => setDisplayName(e.target.value)} value={displayName} />
        </label>

        <label>
            <span>email:</span>
            <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} />
        </label>

        <label>
            <span>password:</span>
            <input type='password' onChange={(e) => setPassword(e.target.value)} value={password} />
        </label>
        
        { !isPending && <button className='btn'>Signup</button> }
        { isPending && <button className='btn' disabled>Loading</button> }
        { error && <p>{error}</p> }

    </form>
  )
}

export default Signup