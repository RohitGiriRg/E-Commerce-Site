import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import './collections-overview.styles.scss';
import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';
import CollectionPreview from "../collection-preview/collection-preview";

const CollectionOverview = ({ collections }) => (
    <div className="collections-overview">
        <div className='shop-page'>
            {collections.map(({ id, ...otherCollectionProps }) => (
                <CollectionPreview key={id} {...otherCollectionProps} />
            ))}
        </div>
    </div>
);

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
});


export default connect(mapStateToProps)(CollectionOverview);