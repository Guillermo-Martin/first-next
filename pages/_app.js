import App from 'next/app'
import Navbar from "./../components/Navbar";

function MyApp({ Component, pageProps }) {
  // this is the generic component
  // whatever our page is, that page component will be the "<Component {...pageProps} />" below in the return
  // any props that you send to "Component" will be received by the page
  return (
    <div>
      <Navbar />
      <Component {...pageProps} />
      <h1>Footer</h1>
    </div>
  )
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp