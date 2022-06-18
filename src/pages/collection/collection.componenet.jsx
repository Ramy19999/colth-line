import React from "react";
import { connect } from "react-redux/es/exports";
import { selectCollection } from "../../redux/shop/shop.selectors";
import './collection.styles.scss';
const CollectionPage = ({path}) => {
    console.log(path)
return(
    <div className="collection-page">
        <h2>Collection Page</h2>
    </div>
)};

//const mapStateToProps = (state,ownProps) => ({
  //  collection : selectCollection(ownProps.match.params.collectionId)(state)
//})

export default CollectionPage;