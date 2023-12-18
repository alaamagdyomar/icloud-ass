import  AppProvider  from '../context/provider';
import './styles.scss'; // Import your global styles here

function MyApp({ Component, pageProps }) {
  return (
    <AppProvider>
      <Component {...pageProps} />
    </AppProvider>
  );
}

export default MyApp;
