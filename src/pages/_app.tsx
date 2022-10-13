import '../styles/globals.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Lab2Dev Portfólio</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
