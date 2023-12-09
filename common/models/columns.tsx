import React from 'react'
import movie from './movie'
export default interface Columns<T>{
    getHeader:()=>React.ReactNode
    getValue:(obj:T)=>React.ReactNode
}