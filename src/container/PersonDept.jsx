import React, { Component } from 'react';
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux';
import personAdd from '../actions/personDeptAdd';
import personDel from '../actions/personDeptDel';

import '../css/style.css';

class PersonDept extends Component {

    handlePersonAdd = () => {
        this.props.personAdd()  
    }

    handlePersonDel = (index, id) => {
        this.props.personDel(index, id)  
    }
    

    render() {

        return (
            <div>

                <div className="AddPerson">
                    <button onClick={() => this.handlePersonAdd()}>Add Person</button>
                </div>

                {
                    this.props.data.map((person, index) => (

                        <div key={index} className="Person" onClick={() => this.handlePersonDel(index, person.id)}>
                            <h1>{person.name}</h1>
                            <p>Age: {person.age}</p>
                        </div>
                    ))

                }

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.people
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        personAdd: personAdd,
        personDel: personDel
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(PersonDept);