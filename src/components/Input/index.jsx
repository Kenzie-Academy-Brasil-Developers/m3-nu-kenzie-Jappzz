import styles from "../Input/style.module.scss"
export const Input = ({ label, id, type, placeholder, value, setValue }) => {
    return (
        <div className={styles.input__container}>
            <label
                className="title four" htmlFor={id}>{label}
            </label>
            <input
                type={type}
                placeholder={placeholder}
                name={id}
                id={id}
                onChange={(event) => setValue(event.target.value)}
                value={value}
                className="title headline input " />
        </div>
    )
}