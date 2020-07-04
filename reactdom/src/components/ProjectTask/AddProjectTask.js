import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addProjectTask } from "../../actions/ProjectTaskActions";
// import classnames from "classnames";


 class AddProjectTask extends Component {

    constructor()
        {
            super()
            this.state={
                summary:"",
                acceptanceCriteria:"",
                statue:"",
                errors:{}

            };

            this.onChange=this.onChange.bind(this);
            this.onSubmit =this.onSubmit.bind(this);
        }


        componentWillReceiveProps(nextProps){
            if(nextProps.errors)
            {
                this.setState({errors :nextProps.errors})
            }
        }


        onChange(e)
        {
            this.setState({[e.target.name]:e.target.value})
        }

        onSubmit(e)
        {
            e.preventDefault()
            const newProjectTask={
                summary:this.state.summary,
                acceptanceCriteria:this.state.acceptanceCriteria,
                status:this.state.statue

            };
            this.props.addProjectTask(newProjectTask, this.props.history);


        }

    
    render() {
        const {errors} = this.state;
        return (
            <div classname="addProjectTask">
            <div classname="container">
                <div classname="row">
                    <div classname="col-md-8 m-auto">
                        <Link to="/" classname="btn btn-light">
                            Back to Board
                        </Link>
                        <h4 classname="display-4 text-center">Add /Update Project Task</h4>
                        <form onSubmit={this.onSubmit}>

                            <div classname="form-group">
                                <input type="text" classname="form-control form-control-lg" name="summary" value={this.state.summary} placeholder="Project Task summary" onChange={this.onChange} />
                                <p>{errors.summary}</p>
                            </div>
                            <div classname="form-group">
                                <textarea classname="form-control form-control-lg"  name="acceptanceCriteria" value={this.state.acceptanceCriteria} placeholder="Acceptance Criteria"  onChange={this.onChange}></textarea>
                            </div>
                            <div classname="form-group">
                                <select classname="form-control form-control-lg" name="status" value={this.state.statue} onChange={this.onChange}>
                                    <option value="">Select Status</option>
                                    <option value="TO_DO">TO DO</option>
                                    <option value="IN_PROGRESS">IN PROGRESS</option>
                                    <option value="DONE">DONE</option>
                                </select>
                            </div>
                            <input type="submit" classname="btn btn-primary btn-block mt-4" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

AddProjectTask.propTypes = {
    addProjectTask: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
  };

const mapStateToProps = state => ({
    errors: state.errors
  });

export default connect(mapStateToProps, {addProjectTask}) (AddProjectTask);
