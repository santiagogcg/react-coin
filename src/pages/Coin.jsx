import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import Root from './Root';
import './Coin.css';

const Coin = () => {
    const [coin, setCoin] = useState({});
    const [fav, setFav] = useState('');
    const { id } = useParams();

    const misfavoritos = JSON.parse(localStorage.getItem('favorites')) || [];


    useEffect(() => {
        const getCoin = async () => {
            let response;
            try {
                response = await axios.get(`https://api.coincap.io/v2/assets/${id}`);
            } catch {
                alert("ERROR");
            }

            const newCoin = response.data.data;
            setCoin(newCoin);
        }

        getCoin();
    }, []);


    useEffect(() => {
        // storing input name
        localStorage.setItem("favorites", JSON.stringify(-));
    }, [fav]);

    const handleFavorites = () => {

        setFav(coin.name);

    }

    return <>
        <div>
            <Root />
        </div >
        <div className="crypto">
            <p><span>Nombre: </span>{coin.name}</p>
            <p><span>Supply: </span>{coin.supply}</p>
            <p><span>Symbol: </span>{coin.symbol}</p>
            <p><span>PriceUsd: </span>{coin.priceUsd}</p>
            <p><a href={coin.explorer} alt={coin.name} target='_blank'>Más info</a></p>
        </div>
        <div>
            <button onClick={handleFavorites}>Añadir favoritos</button>
            <button onClick={handleFavorites}>Eliminar favorito</button>
        </div>
    </>
}

export default Coin;