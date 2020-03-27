import React from 'react';
import { connect } from 'react-redux';
import * as dishActions from '../../redux/actions/dishActions';
import  PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';

class DishesPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            dish:{
                title:""
            }
        };
    }

    handleChange = (event) => {
        const dish = {...this.state.course,title:event.target.value};
        this.setState({ dish });

    }


    handleSubmit = () =>{
        event.preventDefault();
        this.props.actions.createDish(this.state.dish);
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <h2>Dishes</h2>
                <h2>Add Dishes </h2>
                <input type="text" onChange={this.handleChange} value={this.state.dish.title} />
                <input type="submit" value="save"/>
                {this.props.dishes.map(dish =>(
                    <div key={dish.title}>{dish.title}</div>          
                )) }
            </form>
        );
    }
}

DishesPage.propTypes = {
    actions : PropTypes.object.isRequired,
    dishes: PropTypes.array.isRequired
}

function mapStateToProps(state){
    return{
        dishes: state.dishes
    }
}

function mapDispatchToProps(dispatch){
    return {
        actions: bindActionCreators(dishActions,dispatch)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(DishesPage);