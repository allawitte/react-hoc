'use strict';


function Item(){
    return class extends React.Component {
        constructor(props){
            super(props);
            this.props = props;

        }
        render(){
            if(this.props.views > 1000) {
                return (<Popular>{this.props.type == 'article'? <Article {...this.props} /> : <Video {...this.props} />}</Popular>)
            }
            if(this.props.views < 100) {
                return (<New>{this.props.type == 'article'? <Article {...this.props} /> : <Video {...this.props} />}</New>)
            }
            return this.props.type == 'article'? <Article {...this.props} /> : <Video {...this.props} />;
        }
    }
}
const GetItem = Item();
const Popular = props => {
    return (
        <div className="wrap-item wrap-item-popular">
            <span className="label">Popular!</span>
            {props.children}
        </div>
    )
};


