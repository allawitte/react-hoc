'use strict';

function Aggregate(){
    return class extends React.Component {
        constructor(props){
            super(props);
            this.type = this.props.type;
            this.sortDir = this.props.sort;
            this.proceedList = this.props.proceedList;
        }

        render(){
            this.listRefine = this.groupBy(this.refineList(), this.type, this.sortDir);
            const obj = {
                'month': <MonthTable list={this.listRefine} />,
                'year': <YearTable list={this.listRefine} />,
                'sort': <SortTable list={this.listRefine} />
            }
            console.log('Aggregate', this.type, this.listRefine)
            return obj[this.type];
        }
        refineList(){
            if(this.proceedList){
                return this.props.list.map(item => {
                    const [year, month, day] = item.date.split('-');
                    return {year: year,
                        month: month,
                        day: day,
                        amount: item.amount
                    }
                })
            }
            return this.props.list;

        }
        sortBy(param, sortDir) {
            return (item1, item2) => {
                return sortDir == 'asc' ? item1[param] - item2[param] : item2[param] - item1[param];
            };
        }
        sortByDate(item1, item2){
            return(new Date(...item2.date.split('-')).getTime() - new Date(...item1.date.split('-')).getTime());
        }
        groupBy(list, prop, sortDir) {
            if(prop !== 'sort'){
                let obj = list.reduce(function(groups, item) {
                    const val = item[prop]
                    groups[val] = groups[val] || 0
                    groups[val] += item.amount;
                    return groups
                }, {});
                let arr = Object.keys(obj).map(item => {
                    let elem = {};
                    elem[prop] = item;
                    elem.amount = obj[item]
                    return elem
                });
                return arr.sort(this.sortBy(prop, sortDir))
            }
            return list.sort(this.sortByDate);

        }

    }

}

const TableType = Aggregate();

const MonthTable = props => {

    console.log('MonthTable', props);
    //props.list = groupBy(refineList(props.list),'month', 'asc');
    return <div>
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

};
