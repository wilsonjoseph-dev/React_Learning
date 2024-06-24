import { useState } from "react";
//{items:[],heading:string}

interface Props{
  items:string[];
  heading:string;
  onSelectItem:(item:string)=>void;
}
function ListGroup({items, heading,onSelectItem}:Props) {
  
  
  //Hook
 const [selectedIndex, setselectedIndex] = useState(-1)

  return (
    <>
    <h1>{heading}</h1>
    {items.length === 0 && <p>No Items found</p>}
    <ul className="list-group">
      {items.map ((item,index )=> <li className={selectedIndex === index ?'list-group-item active':'list-group-item'} onClick={()=>{setselectedIndex(index)
      onSelectItem(item)
      }} key={index}>{item}</li>)}
    </ul>
    </>
  );
}

export default ListGroup;
