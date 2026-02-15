import React from 'react'
import './Style/BigAds.css'
import girlPhoto from '/Photos/420d36d9f839bb8787eb34a8571bcf05-removebg-preview.png'

const BigAds = () => {
  let urlBigAds =
"https://t3.ftcdn.net/jpg/18/82/12/22/360_F_1882122261_9PEDA691s0bQyAKXizXBfq980Pm1RVxf.jpg"




  return (

    <div className='big-ads-container-img'>
      <img src={urlBigAds} alt="Offer Banner" />
    </div>

  )
}

export default BigAds
