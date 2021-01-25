import '../styles/global.css'
import store from '../store'
import { Provider } from 'react-redux'
import PageWrapper from '../layout/PageWrapper'

function MyApp({ Component, pageProps }) {

  return (
    <Provider store={store}>
      <PageWrapper>
        <Component {...pageProps} />
      </PageWrapper>
    </Provider>
  )
}

export default MyApp
