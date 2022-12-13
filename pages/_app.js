import { useEffect } from 'react'
import  Alert  from '../components/alert/alert'
import AOS from 'aos';
import 'aos/dist/aos.css';
import ArtboardState from '../context/artboard/state'
import setAuthToken from '../context/auth/setAuthToken'
import AuthState from '../context/auth/state'
import PlanState from '../context/plans/state'
import UiState from '../context/UI/state'
import '../styles/globals.css'
import NextNProgress from 'nextjs-progressbar';



function MyApp({ Component, pageProps }) {

  if (typeof window !== "undefined" ? window.localStorage.ctoken : false) {
    setAuthToken(localStorage.ctoken)
  }

  useEffect(() => {
    AOS.init();
  }, []);


  return (
    <>
      <UiState>
        <AuthState>
          <PlanState>
            <ArtboardState>
              <Alert />
              <NextNProgress color="#1C64F2" startPosition={0.3} stopDelayMs={200} height={4} options={{ easing: 'ease', speed: 500 }} />
              <Component {...pageProps} />
            </ArtboardState>
          </PlanState>
        </AuthState>
      </UiState>

    </>

  )

}

export default MyApp
