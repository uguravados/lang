import Nav from '../nav/Nav'
import "./Header.css"

const Header = () => {
  return (
    <div className='header'>
        <div className='headerRight'>
          <h2>
            <span className='ugur'>Ugur </span>
            Frondent Devoloper 
            </h2>
          
            
        </div>

        <Nav/>
    </div>
   
  )
}

export default Header