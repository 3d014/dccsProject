

import Columns from '../../../../../common/models/columns'
import './Table.css'
interface tableProps<T>{
    config:Columns<T>[]
    data:T[]
    

}

function Table<T>(props:tableProps<T>){
    
    
    return <div className="tableContainer">

    
    <table>
        <thead>
            <tr>
                {props.config.map((column,key)=>{return <th key={key}>{column.getHeader()}</th>})}
            </tr>
        </thead>
    </table>
       <div className="dataDiv">
      <table className="dataTable">       
        <tbody className="dataTableBody">
           {props.data.map((item,key)=>{
            return <tr key={key}>{props.config.map((column,key)=>{
                return <td key={key}>{column.getValue(item)}</td>
            })}</tr>
           })}
            
        </tbody>
    </table>
    
    </div> 
    </div>
}

export default Table

