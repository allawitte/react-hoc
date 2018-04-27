'use strict';

const List = props => {
    return props.list.map(item => {
        if(item.views < 1001 && item.views > 100){
            return <GetItem {...item}/>
        }
        else if(item.views > 1000){
            return <Popular {...item} />
        }
        else {
            return <New {...item} />
        }

    });
};
