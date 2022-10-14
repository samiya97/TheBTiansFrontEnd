import {  useSelector } from 'react-redux';

// slices
import { getAuth } from 'services/slices/authSlice';
// routes
import Router from './routes';
// theme
import ThemeProvider from './theme';
// components
import ScrollToTop from './components/ScrollToTop';
import { BaseOptionChartStyle } from './components/chart/BaseOptionChart';

// ----------------------------------------------------------------------

export default function App() {
  const isAuth = useSelector(getAuth);
  return (
    <ThemeProvider>
        <ScrollToTop />
        <BaseOptionChartStyle />
        <Router isAuth={isAuth}/>
    </ThemeProvider>
  );
}
