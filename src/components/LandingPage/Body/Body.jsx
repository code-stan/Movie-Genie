import ChildProp from './ChildProp';
import { useContext } from 'react';
import { Renderer } from '../LandingPage';

const Body = () => {
const {searchItems} = useContext(Renderer)
  return (
    <main className='main-container'>
        { 
            searchItems !== undefined ? 
            searchItems.map((item, i)=>{
                return(
                    <ChildProp {...item} key={i}/>
                )
            }) :  
            <div className='null'>
              <p> Results appear here</p>
            </div>
        }
    </main>
  )
}

export default Body