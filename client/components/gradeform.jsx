import React from 'react';

export default class GradeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      course: '',
      grade: ''
    };
    this.handleName = this.handleName.bind(this);
    this.handleCourse = this.handleCourse.bind(this);
    this.handleGrade = this.handleGrade.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRest = this.handleReset.bind(this);
  }

  handleName(event) {
    this.setState({
      name: event.target.value
    });
  }

  handleCourse(event) {
    this.setState({
      course: event.target.value
    });
  }

  handleGrade(event) {
    this.setState({
      grade: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const newGrade = {
      name: this.state.name,
      course: this.state.course,
      grade: parseInt(this.state.grade)
    };
    this.props.onSubmit(newGrade);
    this.setState({
      name: '',
      course: '',
      grade: ''
    });
  }

  handleReset(event) {
    this.setState({
      name: '',
      course: '',
      grade: ''
    });
  }

  render() {
    return (
      <div className="form-collection mr-2 col-lg-4 p-2">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <div className="input-group input-group-lg margin-bottom padding-right">
              <div className="input-group-prepend mb-2">
                <span className="input-group-text"><i className="fa fa-user" aria-hidden="true"></i></span>
              </div>
              <input
                type="text"
                className="form-control mb-2"
                aria-label="name"
                name="name"
                placeholder="Name"
                onChange={this.handleName}
                value={this.state.name} />
            </div>
            <div className="input-group input-group-lg margin-bottom padding-right">
              <div className="input-group-prepend mb-2">
                <span className="input-group-text"><i className="fa fa-list-alt" aria-hidden="true"></i></span>
              </div>
              <input
                type="text"
                className="form-control mb-2"
                aria-label="course"
                name="course" placeholder="Course"
                onChange={this.handleCourse}
                value={this.state.course} />
            </div>
            <div className="input-group input-group-lg margin-bottom padding-right">
              <div className="input-group-prepend mb-2">
                <span className="input-group-text"><i className="fa fa-graduation-cap" aria-hidden="true"></i></span>
              </div>
              <input
                type="text"
                className="form-control mb-2"
                aria-label="name"
                name="grade"
                placeholder="Grade"
                onChange={this.handleGrade}
                value={this.state.grade} />
            </div>
            <div id="add-cancel-buttons">
              <button id="add" className="btn btn-success m-2" type="submit">Add</button>
              <button id="cancel" className="btn btn-danger m-2" type="reset" onClick={this.handleReset}>Cancel</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
