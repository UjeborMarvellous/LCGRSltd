import '../styles/globals.css'
import Navbar from './Component/Navbar'
import Whatsapp from './Component/Whatsapp'


function MyApp({ Component, pageProps }) {
  return(
    <>

      <Navbar />
      <Whatsapp/>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
