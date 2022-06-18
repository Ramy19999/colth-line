import React from 'react';
import CollectionsOverview from '../../components/collections-overview/collections-overview.componenet';
import {Route, Routes} from 'react-router-dom';
import CollectionPage from '../collection/collection.componenet';
const ShopPage = () => (

<div className='shop-page'>
  <Routes>
    <Route exact path='/' element= {<CollectionsOverview/>}/>
    <Route  path= ':collectionId'  element= {<CollectionPage/>}/>
  </Routes>
  </div>
  );

export default ShopPage ;