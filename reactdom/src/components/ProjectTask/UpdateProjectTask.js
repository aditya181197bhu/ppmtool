import React, { Component } from 'react'

export default class UpdateProjectTask extends Component {
    render() {
        return (
            <div classname="addProjectTask">
            <div classname="container">
                <div classname="row">
                    <div classname="col-md-8 m-auto">
                        <a href="/ProjectBoard.html" classname="btn btn-light">
                            Back to Board
                        </a>
                        <h4 classname="display-4 text-center">Add /Update Project Task</h4>
                        <form>
                            <div classname="form-group">
                                <input type="text" classname="form-control form-control-lg" name="summary" placeholder="Project Task summary" />
                            </div>
                            <div classname="form-group">
                                <textarea classname="form-control form-control-lg" placeholder="Acceptance Criteria" name="acceptanceCriteria"></textarea>
                            </div>
                            <div classname="form-group">
                                <select classname="form-control form-control-lg" name="status">
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
