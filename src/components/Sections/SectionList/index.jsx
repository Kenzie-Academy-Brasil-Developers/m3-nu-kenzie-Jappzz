import React from "react"
import { ListCard } from "./ListCard"
import styles from "../SectionList/style.module.scss"

export const SectionList = ({ noteList, removeNote }) => {
    const isListEmpty = noteList.length === 0

    return (
        <section className={styles.section__container}>
            <h2 className="title three">Resumo financeiro</h2>
            {isListEmpty ? (
                <p className="title two paragraph">Você ainda não possui nenhum lançamento</p>
            ) : null}
            <ul className={styles.list__container}>
                {noteList.map((note) => (
                    <ListCard
                        key={note.id}
                        title={note.title}
                        valueItem={note.valueItem}
                        typeValue={note.typeValue}
                        removeNote={removeNote}
                        id={note.id}
                    />
                ))}
            </ul>
        </section>
    )
}
