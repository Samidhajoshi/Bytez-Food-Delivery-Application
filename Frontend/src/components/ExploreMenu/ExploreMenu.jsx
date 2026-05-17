
import React, { useRef } from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'
const ExploreMenu = ({category,setCategory}) => {
    const scrollRef = useRef(null);

  const handleWheel = (e) => {
    e.preventDefault();
    scrollRef.current.scrollLeft += e.deltaY;
  }; 
  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Warning: Scrolling may cause extreme cravings</h1>
    <p className='explore-menu-text'>Explore for your perfect bite </p>
    <div className='explore-menu-list'>
    {menu_list.map((item,index)=>{
        return(
            <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)}key={index}className='explore-menu-list-item'>
                <img className={category===item.menu_name?"active":""}src={item.menu_image} alt=""/>
                <p>{item.menu_name}</p>
            </div>
        )
    }
    )}
    </div>
    <hr/>
    </div>
  )
}

export default ExploreMenu
