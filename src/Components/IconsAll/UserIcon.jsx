import React, { useContext } from 'react'
import { ThemeContext } from '../../ContextA/ThemeContext';

const UserIcon = () => {

  const { isDark } = useContext(ThemeContext);
  
  return (
    <>
       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M18.39 15.06C16.71 14.2 14.53 13.5 12 13.5C9.47 13.5 7.29 14.2 5.61 15.06C4.61 15.57 4 16.6 4 17.72V20.5H20V17.72C20 16.6 19.39 15.57 18.39 15.06ZM18 18.5H6V17.72C6 17.34 6.2 17 6.52 16.84C7.71 16.23 9.63 15.5 12 15.5C14.37 15.5 16.29 16.23 17.48 16.84C17.8 17 18 17.34 18 17.72V18.5Z" fill={isDark ? "#202020" : "#ffffff"}/>
<path d="M12 12.5C14.21 12.5 16 10.71 16 8.5C16 7.13 16 5 16 5C16 4.17 15.33 3.5 14.5 3.5C13.98 3.5 13.52 3.77 13.25 4.17C12.98 3.77 12.52 3.5 12 3.5C11.48 3.5 11.02 3.77 10.75 4.17C10.48 3.77 10.02 3.5 9.5 3.5C8.67 3.5 8 4.17 8 5C8 5 8 7.12 8 8.5C8 10.71 9.79 12.5 12 12.5ZM10 6H14V8.5C14 9.6 13.1 10.5 12 10.5C10.9 10.5 10 9.6 10 8.5V6Z" fill={isDark ? "#202020" : "#ffffff"}/>
</svg> 
    </>
  )
}

export default UserIcon
