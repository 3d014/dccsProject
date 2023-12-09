interface menuItem{
    id:string;
    title:string;
    path:string;
    hasChildren:boolean;
    children?:menuItem[]

}
export default menuItem