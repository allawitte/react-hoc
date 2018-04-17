'use strict';

const MonthTable = props => {

    console.log('MonthTable', props);
    props.list = groupBy(refineList(props.list),'month', 'asc');
    return (
        <div>
            <h2>Month Table</h2>
            <table>
                <tr>
                    <th>Month</th>
                    <th>Amount</th>
                </tr>
                {props.list.map(item => (
                    <tr>
                        <td>{item.month}</td>
                        <td>{item.amount}</td>
                    </tr>
                ))}
            </table>
        </div>
    );
};

const refineList = list => {
   return list.map(item => {
        const [year, month, day] = item.date.split('-');
        return {year: year,
            month: month,
            day: day,
            amount: item.amount
        }
    })
}

const sortBy = (param, sortDir)=> {
    return (item1, item2) => {
        return sortDir == 'asc' ? item1[param] - item2[param] : item2[param] - item1[param];
    };
}
const sortByDate = (item1, item2)=> {
    console.log('item1', item1)
    return(new Date(...item2.date.split('-')).getTime() - new Date(...item1.date.split('-')).getTime());
}
const groupBy = function(list, prop, sortDir) {
    if(prop){
        let obj =list.reduce(function(groups, item) {
            const val = item[prop]
            groups[val] = groups[val] || 0
            groups[val] += item.amount;
            return groups
        }, {})
        let arr = Object.keys(obj).map(item => {
            let elem = {};
            elem[prop] = item;
            elem.amount = obj[item]
            return elem
        });
        return arr.sort(sortBy(prop, sortDir))
    }
    return list.sort(sortByDate);

}
