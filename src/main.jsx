import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AuthProvider from './AuthContext.jsx'
import UserProfileProvider from './UserProfileContext.jsx'

createRoot(document.getElementById('root')).render(
   <AuthProvider>
    <UserProfileProvider>
       <App />
    </UserProfileProvider>
   </AuthProvider>
)
