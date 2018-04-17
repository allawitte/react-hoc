'use strict';

const DateTime = props => {
    return (
        <p className="date">{props.date}</p>
    )
};

function DateParse(Component) {
    return class extends React.Component {
        render() {
            const min = 1000*60;
            const hours = min*60;
            const days = hours*24;
            const timeDiff = new Date().getTime()-new Date(...this.props.date.split(/[-: ]/)).getTime();
            if(Math.floor(timeDiff/days) > 0){
               this.props.date =  Math.floor(timeDiff/days) + ' дней назад';
            }
            else if(Math.floor(timeDiff/hours) > 0){
                this.props.date =  Math.floor(timeDiff/hours) + ' часов назад';
            }
            else {
                this.props.date = Math.floor(timeDiff/min) + ' минут назад';
            }

            return <Component {...this.props} />;
        }
    }
}

const DateTimePretty = DateParse(DateTime);