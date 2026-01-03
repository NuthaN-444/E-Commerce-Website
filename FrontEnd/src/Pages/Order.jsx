import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import { UseAllContext } from '../Contexts/AllContext'
import Login from './Login'

const Order = () => {
  const {isLogin,setIsLogin} = UseAllContext();  
  
  return (
    <>
    {isLogin ? <div>
      <Header />
      <Footer />
    </div> : <Login />}
    </>
  )
}

export default Order
