import logotip from "../assets/images/logo.png";

const Navbar =()=>{
   return (
      <>
         <header>
        <div className="container">
          <nav className="nav">
      
      <img src={logotip} alt="rasm" className="logo"/>

            <ul>
              <li>
                <a href="#">link-1</a>
              </li>
              <li>
                <a href="#">link-2</a>
              </li>
              <li>
                <a href="#">link-3</a>
              </li>
              <li>
                <a href="#">link-4</a>
              </li>
              <li>
                <a href="#">link-5</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      
      </>
   )
}


export default Navbar;