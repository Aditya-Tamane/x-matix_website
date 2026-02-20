import '../styles/globals.css'
import Header from '../components/common/Header/Header'
import Footer from '../components/common/Footer/Footer'
import Home1 from '../pages/home1'
import ProductPage1 from '../globals/layouts/xMatix-platform'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-blue-950 to-black text-white"> 
      {/* <Header/>      */}
      <Home1/>
      {/* <ProductPage1/> */}
      {/* <Footer /> */}
    </div>
  )
}