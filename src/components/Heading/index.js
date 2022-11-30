import styles from "./index.module.css"

function Heading(props) {
    return (
        <h1 className={styles.text}>{props.basliq}</h1>
    )
}

export default Heading;
