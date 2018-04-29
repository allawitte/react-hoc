'use strict';

const List = props => {
    return props.list.map(item => {
        console.log('item', item)
        return <GetItem {...item}/>
    });
};
