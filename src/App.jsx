
import { useContext, useEffect, useState } from 'react'
import { ThemeContext } from './ContextA/ThemeContext'
import HomePage from './Components/Pages/HomePage/HomePage'

import './App.css'
import RoutingConfiguration from './RoutingConfigration';
// import EffectUse from '../ReactTopic/EffectUse'
// import FilterTest from '../ReactTopic/Filter'
// import TabUseState from '../ReactTopic/TabUseState'
// import UseStateTopic from '../ReactTopic/useState'
// import BestSeller from './Components/BestSeller/BestSeller'
// import Collection from './Components/Collection/Collection'
// import FiltersBlock from './Components/Filters/Filters'
// import FollowUs from './Components/FollowUs/FollowUs'
// import Footer from './Components/Footer/Footer'
// import Header from './Components/Header/Header'
// import HeroBanner from './Components/HeroBanner/HeroBanner'
// import CreateAccount from './Components/LoginPages/CreateAccount'
// import Login from './Components/LoginPages/Login'
// import MiddleBanner from './Components/MiddelBanner/MiddleBanner'
// import ModiWeek from './Components/ModiWeek/ModiWeek'
// import PracticesQuestionUEffect from '../ReactTopic/PracticesQuestionUEffect'
// import TimerStartStop from '../ReactTopic/TimerStartStop'
// import SelectDropD from '../ReactTopic/SelectDropD'
// import ProductPage from './Components/ProductPage/ProductPage'
// import RefUse from '../ReactTopic/RefUse'
// import ReducerUse from '../ReactTopic/ReducerUse'
// import Calculator from '../ReactTopic/CalulaterReducer'
// import { ForLoginUser, LoginCartContext, useLoginUser } from './ContextA/CartContext'




// const ConditionalSection = () => {
//   const { isLoginCart } = useLoginUser();
//   return <>{isLoginCart ? <ModiWeek /> : null}</>;
// };

function App(searchTerm) {
  const [isDark, setIsDark] = useState(() => {
    const stored = localStorage.getItem('isDarkMode');
    return stored ? JSON.parse(stored) : false;
  });

  useEffect(() => {
    localStorage.setItem('isDarkMode', JSON.stringify(isDark));
    document.body.className = isDark ? 'light' : 'dark'; // Optional: apply class to body
  }, [isDark]);

  return (
    <ThemeContext.Provider value={{ isDark, setIsDark }}>
      <RoutingConfiguration />
     </ThemeContext.Provider>
  )
}

export default App
