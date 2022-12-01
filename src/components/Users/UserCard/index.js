import React from 'react'
import styles from './index.module.css'

function UserCard(props) {
    return (
        <div className={styles.card}>
            <img src={props.img} alt="" />
            <h2>{props.username}</h2>
            <p>{props.job}</p>
        </div>
    )
}

export default UserCard;
