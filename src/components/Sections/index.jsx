
import { useState } from "react"
import { SectionForm } from "./SectionForm"
import { SectionList } from "./SectionList"
import { SectionTotalMoney } from "./SectionTotalMoney"
import styles from "./style.module.scss"
import {v4 as uuidv4} from 'uuid'
export const Sections = () => {

    const[noteList, setNoteList] = useState([])

    const addNote = (formData)=>{
        const newNote = {...formData, id: uuidv4()}
        setNoteList([...noteList, newNote])
    }

    const removeNote = (remoteId)=>{
        const newNoteList = noteList.filter(note => note.id !== remoteId)
        setNoteList(newNoteList)
    }
    return (
        <main className={styles.main__container}>
            <div className={styles.div__container}>
                <SectionForm addNote={addNote}/>
                <SectionTotalMoney noteList={noteList}/>
            </div>
            <SectionList noteList={noteList} removeNote={removeNote}/>
        </main>
    )
}