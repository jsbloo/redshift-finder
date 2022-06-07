import {useState, useEffect} from 'react';
import axios from 'axios';
import Search from './Search';

const SearchPage = () => {
    
    // State
    const [SearchList, setSearchList] = useState([]); 
    const [loaded, setLoaded] = useState(false); 
    // const [fetch, setFetch] = useState(true); 

    // UseEffect
    useEffect(() => {
        setTimeout(() => {
            // axios.get(URL we are searching for) - axios will return a promise (data to be fulfilled)
            axios.get("XXXXX") 
            // .then() - whatever the previous function returns, chuck it in here and do this with it
            .then((response) => {
                console.log(response.data); // Check what the data looks like, to see *how* to set it
                setSearchList(response.data);
            
                // Once the state for beerList has been set, we can setLoaded(true)
                setLoaded(true);
            });
        }, 2000)
    },[]);
        
    
};
 
export default SearchPage;