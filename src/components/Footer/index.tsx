import styles from './footer.module.scss';


function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.Content}>
                <strong>© 2023 My E-commerce Store</strong>
                <p>{new Date().getFullYear()} - Todos os Direitos Reservados</p>
            </div>
        </footer>
    );
}

export default Footer;