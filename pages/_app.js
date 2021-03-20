import Layout from '../comps/Layout';
import '../styles/globals.css'
import '../styles/Navbar.css'
import '../styles/Contacts.css'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp
