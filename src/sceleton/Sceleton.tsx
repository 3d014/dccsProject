import { Route, Routes } from "react-router"
import Navigation from "../views/navigation/Navigation"
import Start from "../views/start/Start"
import Header from "./components/header/Header"
import './Sceleton.css'
import menuItem from '../../common/models/menuItem'
import {v4 as uuidv4} from 'uuid'
import MachineLearning from "../views/machineLearning/MachineLearning"
import { MoviesContextProvider } from "../providers/MovieContext"
import { MovieEditor } from "../views/movieEditor/MovieEditor"

let menuItems:menuItem[]=[{id:uuidv4(),title:'Start',path:'/',hasChildren:false},
{id:uuidv4(),title:'Machine Learning',path:'MachineLearning',hasChildren:true,
children:[{id:uuidv4(),title:'example1',path:'example1',hasChildren:false},
{id:uuidv4(),title:'example2',path:'example2',hasChildren:true,children:
[{id:uuidv4(),title:'example3',path:'example3',hasChildren:false},
{id:uuidv4(),title:'example4',path:'example4',hasChildren:true,
children:[{id:uuidv4(),title:'example5',path:'example5',hasChildren:false}]}
]}]}

]



function Sceleton(){
    return <div className="main">
        <div className="sidebar">
            <div className="dccs">DCCS Tuzla</div>
            <Navigation items={menuItems}/>

        </div>
        <div className="page">
            <div className="header">
                <Header/>
            </div>
            
                
                <Routes>
                    <Route  path='/' element={<Start/>}/>
                    <Route path='MachineLearning' element={<MoviesContextProvider><MachineLearning/></MoviesContextProvider>}/>
                    <Route path='MovieEditor' element={<MoviesContextProvider><MovieEditor/></MoviesContextProvider>}>
                        <Route path=':id' element={<MoviesContextProvider><MovieEditor/></MoviesContextProvider>}/>
                    </Route>
                    <Route path='example1' element={<div>example1</div>}/>
                    <Route path='example2' element={<div>example2</div>}/>
                    <Route path='example3' element={<div>example3</div>}/>
                    <Route path='example4' element={<div>example4</div>}/>
                    <Route path='example5' element={<div>example5</div>}/>
                </Routes>
           


        </div>



    </div>
}

export default Sceleton
