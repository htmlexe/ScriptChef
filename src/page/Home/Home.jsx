import data from "../../assets/json/example.json"
import { useState } from "react";
import SelectHaveOrientation from "../../component/SelectHaveOrientation/SelectHaveOrientation";

const Home = () => {
    const [isSelectedOrien, setIsSelectedOrien] = useState(false);
    
    return isSelectedOrien ? <></> : <SelectHaveOrientation setIsSelectedOrien={b => setIsSelectedOrien(b)}/>
}

export default Home;