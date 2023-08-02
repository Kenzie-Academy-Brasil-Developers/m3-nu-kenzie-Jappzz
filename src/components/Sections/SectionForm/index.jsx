import { useState } from "react"
import { Input } from "../../Input"
import styles from "../SectionForm/style.module.scss"
export const SectionForm = ({addNote}) => {
    const [title, setTitle] = useState("")
    const [valueItem, setValueItem] = useState("")
    const [typeValue, setTypeValue] = useState("Entrada")
    

    const submit = (event) => {
        event.preventDefault()
        addNote({ title, valueItem, typeValue })
        setTitle("")
        setValueItem("")
    }

    return (
        <section className={styles.section__container}>
            <form onSubmit={submit} className={styles.form__container}>
                <div>
                    <Input label="Descrição"
                        id="title"
                        type="text"
                        placeholder="Digite aqui sua descrição"
                        value={title}
                        setValue={setTitle} 
                        />
                    <small className="title body">
                        Ex: Compra de roupas
                    </small>
                </div>

                <Input
                    label="Valor (R$)"
                    id="valueItem"
                    type="text"
                    placeholder="1"
                    value={valueItem}
                    setValue={setValueItem} />

                <label
                    className="title four"
                    htmlFor="typeValue">Tipo de Valor
                </label>
                <select
                    onChange={(event) => setTypeValue(event.target.value)}
                    value={typeValue}
                    name="typeValue"
                    id="typeValue"
                    className={styles.select}
                    >
                    <option value="Entrada">Entrada</option>
                    <option value="Saida">Saída</option>
                </select>
                <button type="submit" className="btn lg">Inserir valor</button>
            </form>
        </section>
    )
}