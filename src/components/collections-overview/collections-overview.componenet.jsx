import React from "react";
import { connect } from "react-redux/es/exports";
import './collections-overview.styles.scss';
import { selectCollectionForPreview } from "../../redux/shop/shop.selectors";
import {createStructuredSelector} from  "reselect";
import CollectionPreview from '../collection-preview/collection-preview'
const CollectionsOverview = ({collections}) => (
    <div className="collections-overview">
{
collections.map(({id, ...otherCollectionProps}) =>(
<CollectionPreview key={id} {...otherCollectionProps}/>
))
}
    </div>
);
const mapStateToProps  = createStructuredSelector({
    collections : selectCollectionForPreview 
});

export default connect(mapStateToProps)(CollectionsOverview);