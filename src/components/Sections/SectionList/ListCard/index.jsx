import styles from "../ListCard/style.module.scss"
import CurrencyFormat from 'react-currency-format';
export const ListCard = ({ title, typeValue, valueItem, removeNote, id }) => {
    let type
    if(typeValue === "Entrada"){
        type = "entrance"
    }else{
        type = "exit"
    }
    return (
        <li className={styles.card}>
            <div className={styles.div__container}>
                <div className={`${styles.retangle} ${styles[type]}`}>

                </div>
                <div className={styles.info}>
                    <h2 className="title three">{title}</h2>
                    <small className="title body">{typeValue}</small>
                </div>

            </div>
            <div className={styles.div__price}>
                <p className="title body">
                    <CurrencyFormat 
                    value={valueItem} 
                    displayType={'text'} 
                    prefix={'R$ '} 
                    decimalSeparator={','} thousandSeparator={'.'} />
                </p>
                <button onClick={() => removeNote(id)}className="btn sm">Excluir</button>
            </div>
        </li>
    )
}