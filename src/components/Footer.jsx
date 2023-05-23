function Footer(){
    const year = new Date().getFullYear();
    return (
        <footer>
            <p>&#169;{year}</p>
        </footer>
    )
}
export default Footer
