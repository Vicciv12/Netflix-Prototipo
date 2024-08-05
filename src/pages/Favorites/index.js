import Footer from "../../components/Footer"
import Container from "../../components/Container";
import Header from "../../components/Header"
import styles from "./Favorites.module.css";
import VideoList from "../../components/VideoList"
import { useFavoriteContext } from "../../contexts/Favorites";

function Favorites() {

    const { favorite } = useFavoriteContext();
    
    return(
    <>
    <Header />
    <Container>
        <section className={styles.favorites} >     
        <h2>Meus Favoritos</h2>
            { <VideoList videos={favorite} /> }
        </section>
    </Container>
    <Footer/>
    </>
    );
}

export default Favorites