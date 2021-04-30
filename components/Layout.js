import Meta from './Meta'
import Header from './Header'
import SideBar from './SideBar'
import Footer from './Footer'
import 'bootstrap/dist/css/bootstrap.css';


const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <Header />
      <div className= "container">
           {children}             
      </div>
      <Footer />
    </>
  )
}

export default Layout