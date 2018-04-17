'use strict';

const YearTable = props => {

    console.log('YearTable', props);
    props.list = groupBy(refineList(props.list),'year', 'asc');
    return (
        <div>
            <h2>Year Table</h2>
            <table>
                <tr>
                    <th>Year</th>
                    <th>Amount</th>
                </tr>
                {props.list.map(item => (
                    <tr>
                        <td>{item.year}</td>
                        <td>{item.amount}</td>
                    </tr>
                ))}
            </table>
        </div>
    );
};