import React from 'react'
import { UseAllContext } from '../Contexts/AllContext'
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import AddProd from '../Components/AddProd';
import ProductCard from '../Components/ProductCard';
import "./Style/Admin.css"



const Admin = () => {
    const {userData} = UseAllContext();
  return (
    <>
        {(userData.role===`${import.meta.env.VITE_ADMIN_ROLE}`)?
            <div className='admin-div'>
              <Header />
              <div className='produ-details-card'>
              <AddProd />
              <div className='prod-card-div-admin'>
              <ProductCard/> </div>
              </div>
              <Footer />
              </div>
          :<div>user</div>
        }

    </>
  )
}

export default Admin
