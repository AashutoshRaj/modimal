import React, { useState } from 'react'
import HeroBanner from '../../HeroBanner/HeroBanner'
import BestSeller from '../../BestSeller/BestSeller'
import Collection from '../../Collection/Collection'
import { ForLoginUser, useLoginUser } from '../../../ContextA/CartContext'
import MiddleBanner from '../../MiddelBanner/MiddleBanner'
import FollowUs from '../../FollowUs/FollowUs'
import ModiWeek from '../../ModiWeek/ModiWeek'
import { useAuth } from '../../../AuthContext'

const ConditionalSection = () => {
  // const { isLoginCart } = useLoginUser();
  const {isAuthenticated } = useAuth([])
  return <>{isAuthenticated ? <ModiWeek /> : null}</>;
};


const HomePage = (searchTerm) => {

  return (
    <>
      <HeroBanner />
      <BestSeller searchTerm={searchTerm} />
      <Collection />
      <ForLoginUser>
        <ConditionalSection />
      </ForLoginUser>
      <MiddleBanner />
      <FollowUs />
    </>
  )
}

export default HomePage
