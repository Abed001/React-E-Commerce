import React from 'react'
import CategoryItem from '../Components/CategoryItem'



const categoryItems = [
  {
      id: 1,
      img: "https://images.pexels.com/photos/7945660/pexels-photo-7945660.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "SHIRT STYLE!",
    

  },

  {
      id: 2,
      img: "https://images.pexels.com/photos/1632069/pexels-photo-1632069.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "LOUNGE WEAR LOVE",
      
     

  },

  {
      id: 3,
      img: "https://images.pexels.com/photos/7433158/pexels-photo-7433158.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "LIGHT JACKET",
     

  },

  {
    id: 2,
    img: "https://images.pexels.com/photos/1632069/pexels-photo-1632069.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "LOUNGE WEAR LOVE",
    
   

},
{
  id: 1,
  img: "https://images.pexels.com/photos/7945660/pexels-photo-7945660.jpeg?auto=compress&cs=tinysrgb&w=600",
  title: "SHIRT STYLE!",


},


];
export default function Categories() {
  return (
     <div className="Category-container">
     {categoryItems.map(item=>(
          <CategoryItem item={item} key={item.id}/>
        
        
      ))}
   </div> 
  )
}
