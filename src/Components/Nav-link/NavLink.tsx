import './NavLink.css'

type props = {
    children: string,
    onClick: ()=> void 
}
export default function NavLink({children, onClick}: props ){
    return(
        <button className='navlink' onClick={onClick}>
            {children}
        </button>
    )
}