'use strict';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: []
        };
    }

    componentDidMount() {
        axios.get('https://api.myjson.com/bins/l2s9l').then(response => {
            this.setState(response.data);
        });
    }

    render() {
        return (
            <div id="app">
                <TableType list={this.state.list} type="month" sort="asc" proceedList={true}/>
                <TableType list={this.state.list} type="year" sort="asc" proceedList={true}/>
                <TableType list={this.state.list} type="sort" sort="desc" proceedList={false}/>
            </div>
        );
    }
};