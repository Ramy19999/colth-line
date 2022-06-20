import React from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import "./collection.styles.scss";
import { useParams,Route } from "react-router-dom";
import { selectCollection } from "../../redux/shop/shop.selectors";
import CollectionItem from "../../components/collection-item/collection-item.componenet";
const CollectionPage = () => {
  // you can use the app selector hook to get the state (just like map state to props but the modern hook version)
  // you can pass the selectors too e.g useSelector(selectShop)
  const state = useSelector((state) => state);
  //const Collection = useSelector(selectCollection) ;
  // you can use this if you want to dispatch actions e.g dispatch(getNudes())
  //const dispatch = useDispatch();

  // this hook returns the params and we need the collectionId from it
  //by params i mean this
  // <Route path=":collectionId" element={<CollectionPage />} />
  // the :collectionId
  const params = useParams();
  // here im passing the collectionId to the selector so he can get it from the store but
  // for now it's not working because the collections reducer isn't there yet
  // so i commented it for now cause it will break the app
  // http://localhost:3000/cloth-line
    const collection = useSelector(selectCollection(params.collectionId));
    const { title, items } = collection;
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2> 
      Yo
      <div className="items">
      {items.map(item => (
        <CollectionItem key={item.id} item ={item}/>
      ))} 
      </div>
    </div>
  );
};

export default CollectionPage;