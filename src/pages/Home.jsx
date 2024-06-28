import { useState, useEffect } from "react";
import { useParams, Link, Outlet } from "react-router-dom";
import axios from "axios";
import Root from './Root';
import './Home';

const Home = () => {

    const [coinsAll, setCoinsAll] = useState([]);

    useEffect(() => {
        const getAllCoins = async () => {

            let response;
            try {
                response = await axios.get(`https://api.coincap.io/v2/assets`);
            } catch {
                alert("ERROR");
            }

            const resAllCoins = response.data.data;

            setCoinsAll(resAllCoins);
        }

        getAllCoins();
    }, []);

    return <>
        <div>
            <Root />
        </div >
        <div>
            {coinsAll.map((coin, index) => <Link key={index} to={`/coin/${coin.id}`}>
                <p className="coin">Criptomoneda: {coin.id}</p>
            </Link>)}
        </div>

    </>
}

export default Home;