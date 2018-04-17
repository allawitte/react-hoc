'use strict';

const New = props => {
    console.log('props', props)
    return (
        <div className="wrap-item wrap-item-new">
        <span className="label">New!</span>
            {getItem(props)}
        </div>
    )
};
