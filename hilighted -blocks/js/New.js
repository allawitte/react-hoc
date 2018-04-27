'use strict';

const New = props => {
    return (
        <div className="wrap-item wrap-item-new">
        <span className="label">New!</span>
            <GetItem {...props}/>
        </div>
    )
};
