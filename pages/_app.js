import '../styles/globals.css'
// import Seo from "../components/common/seo";
import 'bootstrap/dist/css/bootstrap.min.css';
// import ScrollToTop from "../components/common/ScrollTop";
// import { store } from "../app/store";

if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}

function MyApp({ Component, pageProps }) {
  return (
    <>
{/* <Seo
        font={
          "https://fonts.googleapis.com/css?family=Nunito:400,400i,500,600,700&display=swap"
        }
      /> */}
<Component {...pageProps} />
{/* <ScrollToTop /> */}
      </>
  
  
  
  
  )

 
}

export default MyApp
