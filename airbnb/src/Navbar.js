import airbnb from './images/airbnb-logo.png'

function Navbar(){
    return (
        <nav className=" navbar">
            <img className="logo" src={airbnb} alt="airbnb logo"></img>
        </nav>
    )
}
export default Navbar