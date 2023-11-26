import { Outlet } from 'react-router-dom'
import Navbar from '../Component/Shared/Header/Navbar'
import Footer from '../Component/Shared/Footer/Footer'

const Main = () => {
  return (
    <div>
      <Navbar />
      <div className='min-h-[calc(100vh-224px)]'>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default Main