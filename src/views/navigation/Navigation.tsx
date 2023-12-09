import { useNavigate} from "react-router-dom"
import menuItem from "../../../common/models/menuItem"
import './Navigation.css'
import {AiTwotoneHome,AiOutlineDown, AiOutlineUp,AiFillDatabase} from 'react-icons/ai'
import { useState } from "react"

interface navigationProps{
    items:menuItem[]
}

export default function Navigation(props:navigationProps){
    let navigate=useNavigate()
    const [openSubMenu, setOpenSubMenu] = useState<string[]>([])
    const [activeLink, setActiveLink] = useState<string>('')


    
    const renderMenuItem=(item:menuItem,siblingItems?:menuItem[])=>{
        const toggleSubMenu=()=>{
            if(openSubMenu.includes(item.id)){
                setOpenSubMenu(openSubMenu.filter(id=>id!==item.id))
                } else {
                    setOpenSubMenu([...openSubMenu,item.id])
                }
            }

        const handleClick=(item:menuItem,siblingItems?:menuItem[])=>{
            navigate(item.path)
            setActiveLink(item.id)
            toggleSubMenu()
            if(!item.hasChildren){
                if(siblingItems){
                  let siblingIds=siblingItems.map(item=>item.id)
                  let filteredSubMenu=openSubMenu.filter(id=>!siblingIds.includes(id))
                  setOpenSubMenu(filteredSubMenu)
                }
                else{
                    setOpenSubMenu([])
                }
            }
        }
            
            const isOpen=openSubMenu.includes(item.id)
            return (<div key={item.id}>
                <div key={item.id} className="ma">
                    <div className={activeLink===item.id?'selectedLink':'empty'}></div>
                    <div className={activeLink===item.id?'active':''} 
                         onClick={(e)=>{
                            e.preventDefault()
                            handleClick(item,siblingItems)
                         }}>
                            
                        {item.hasChildren&&<AiFillDatabase/>}
                        {item.title==='Start'&&<AiTwotoneHome/>}
                        {item.title}
                        {item.hasChildren&&(
                            <div className="toggleIcon">
                                {isOpen?<AiOutlineUp/>:<AiOutlineDown/>}
                            </div>
                        )}
                        
                    </div>
                    
                </div>
                    <div key={item.id+'1'} className="da">
                    {item.hasChildren&& isOpen&& item.children?.map(childItem=>renderMenuItem(childItem,item.children))}
                    </div>
                </div>
              )
            
    }

    return (
        <ul>
            {props.items.map(item=>renderMenuItem(item))}
        </ul>
    ) 
    
}