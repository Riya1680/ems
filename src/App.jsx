import React, {useEffect, useState} from 'react'
import AdminDashboard from './components/Dashboard/AdminDashboard'
// import { getLocalStorage, setLocalStorage } from './utilis/localstorage'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import Login from './components/Auth/Login'
import { useContext } from 'react'
import { AuthContext } from './context/AuthProvider'

const App = () => {

  const [ user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const [userData,setUserData] = useContext(AuthContext)
  // console.log(authData.employees)

  useEffect(()=>{
   const loggedInUser = localStorage.getItem("loggedInUser")
   if(loggedInUser){
    // setUser(loggedInUser.role)
    const userData = JSON.parse(loggedInUser)
    console.log(userData);  // role: admin
    setUser(userData.role)
    setLoggedInUserData(userData.data)
   }

  
  },[]);   // ye kab change hoga jab authdata mera chaange hoga

  
  const handleLogin = (email, password) => {
    if(email == 'admin@example.com' && password == '123'){
      setUser('admin')
      console.log(user)  //  admin 
    localStorage.setItem('loggedInUser', JSON.stringify({role:'admin'}))
  }
  else if(userData) {
    const employee = userData.find((e)=> email == e.email && e.password == password)
    if(employee){
      setUser('employee')
      console.log(user)  // employee
      setLoggedInUserData(employee)
      console.log(loggedInUserData)
      localStorage.setItem('loggedInUser', JSON.stringify({role:'employee', data:employee}))
    }
  }
  else{
    alert("Invalid cerdentials")
  }
}
  
  return (
    <>
    {!user ? <Login handleLogin = {handleLogin} /> : ''}
    {user == 'admin' ? <AdminDashboard changeUser={setUser} /> : (user == 'employee' ? <EmployeeDashboard changeUser={setUser} data = {loggedInUserData}/> :null)}
    
    </>
  )
}

export default App
