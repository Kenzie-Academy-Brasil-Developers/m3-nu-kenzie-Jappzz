
import React from "react"
import CurrencyFormat from "react-currency-format"
import styles from "../SectionTotalMoney/style.module.scss"
export const SectionTotalMoney = ({ noteList }) => {
  const totalValue = noteList.reduce((accumulator, item) => {
    if (item.typeValue === "Entrada") {
      return accumulator + parseFloat(item.valueItem)
    } else {
      return accumulator - parseFloat(item.valueItem)
    }
  }, 0)

  if (noteList.length === 0) {
    return null
  } else {
    return (
      <section className={styles.section__container}>
        <div className={styles.div__container}>
          <h2 className="title three">Valor total:</h2>
          <p className="title three pink">
            <CurrencyFormat
              value={totalValue}
              displayType={"text"}
              prefix={"R$"}
              decimalSeparator={","}
              thousandSeparator={"."}
            />
          </p>
        </div>
        <p className="title body ">O valor se refere ao saldo</p>
      </section>
    )
  }
}

/*
  vai receber a notelist que tem as insformações atualizadas e se for de entrada ele irá somar e colocar em uma variavel e se for saida ele ira subritrair
*/
