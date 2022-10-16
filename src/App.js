import { useEffect,useState } from 'react';
import {  useSelector } from 'react-redux';

// slices
import { getAuth } from 'services/slices/authSlice';
// routes
import Router from './routes';
// theme
import ThemeProvider from './theme';
// components
import { getPermission, onMessageListener } from './firebase';
import ScrollToTop from './components/ScrollToTop';
import { BaseOptionChartStyle } from './components/chart/BaseOptionChart';

// ----------------------------------------------------------------------

export default function App() {
  const [isTokenFound, setTokenFound] = useState(false);
  const isAuth = useSelector(getAuth);
  
  useEffect(() => {
    getPermission(setTokenFound);
    console.log(isTokenFound)
    onMessageListener().then(payload => {
      // setShow(true);
      // setNotification({title: payload.notification.title, body: payload.notification.body})
      console.log("payload",payload);
    }).catch(err => console.log('failed: ', err));
  },[])
  
  return (
    <ThemeProvider>
        <ScrollToTop />
        <BaseOptionChartStyle />
        <Router isAuth={isAuth}/>
    </ThemeProvider>
  );
}
