'use strict';

const Popular = props => {
    return (
        <div className="wrap-item wrap-item-popular">
        <span className="label">Popular!</span>
        {getItem(props)}
        </div>
    )
};

const getItem = props => {
    return props.type == 'article'? <Article {...props} /> : <Video {...props} />;
}
