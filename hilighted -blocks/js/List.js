'use strict';

const List = props => {
    return props.list.map(item => {
        console.log('item', item);
        if(item.views < 1001 && item.views > 100){
            console.log('usual');
            return getItem(item)
        }
        else if(item.views > 1000){
            return <Popular {...item} />
        }
        else {
            return <New {...item} />
        }

    });
};
