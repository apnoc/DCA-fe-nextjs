import Layout from '../components/Layout'
import '../styles/globals.css'
import initFontAwesome from "../components/initFontAwesome";
initFontAwesome();

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
