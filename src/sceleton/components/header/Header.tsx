import './Header.css'

export default function Header(){
    return <div className="headerLayout">
        <div className="user">
            <label>User</label>
            <select className='userSelect'>
                <option></option>
            </select>
        </div>

        <div className="language">
            <label>Langauge</label>
            <select>
                <option>English</option>
                <option>Deutch</option>
            </select>
        </div>
    </div>
}