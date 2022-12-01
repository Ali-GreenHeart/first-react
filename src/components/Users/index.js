import React from 'react'
import UserCard from './UserCard';
import { users } from './users';
import styles from "./index.module.css"

function Users() {
    return (
        <div className={styles.usersContainer}>
            {
                users.map((user) => {
                    return <UserCard img={user.img} username={user.username} job={user.job} />
                })
            }
        </div>
    )
}


export default Users;
