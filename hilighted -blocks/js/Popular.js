'use strict';


function Item(){
    return class extends React.Component {
        constructor(props){
            super(props);
            this.props = props;
        }
        render(){
            return this.props.type == 'article'? <Article {...this.props} /> : <Video {...this.props} />;
        }
    }
}
const GetItem = Item();
const Popular = props => {
    return (
        <div className="wrap-item wrap-item-popular">
        <span className="label">Popular!</span>
            <GetItem {...props}/>
        </div>
    )
};


