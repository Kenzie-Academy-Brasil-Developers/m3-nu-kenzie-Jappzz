import logoNuKenzie from "../../assets/NuKenzie-Logo.png"
import styles from "../../components/Header/style.module.scss"
export const Header = () =>{
    return(
        <header className={styles.header__container}>
            <img src={logoNuKenzie} alt="logo NuKenzie" />
        </header>
    )
}