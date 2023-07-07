/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { config } from "../../../../config";
import { useContext } from 'react';
import { Renderer } from '../LandingPage';


const Header = () => {
    const [searchWord, setSearchWord] = useState("");
    const [triggerSearch, setTriggerSearch] = useState("")
    const {setSearchItems} = useContext(Renderer)

    const secret_key = config.OMDB_API_KEY;
      const fetchData = async(url, title, key) => {
          const res = await fetch(`${url}s=${title}&apikey=${key}`);
          const data = await res.json()
          
          setSearchItems(data.Search)
      }
    
    
    useEffect(()=>{
      fetchData("https://www.omdbapi.com/?", triggerSearch, secret_key).catch(err => console.log(err))
    }, [triggerSearch])

  return (
    <header className="header">
      <div className="text-content">
        <h1>Movie Genie</h1>
        <p>Search for movies that ever existed</p>
        <section className="search-section">
          <input 
          className="search-bar"
          type="search" 
          value={searchWord}
          onChange={e=> setSearchWord(e.target.value)}
          placeholder='Enter your movie'/>
          <button type='button' onClick={()=> setTriggerSearch(searchWord)} >Search</button>
        </section>
      </div>
    </header>
  )
}

export default Header