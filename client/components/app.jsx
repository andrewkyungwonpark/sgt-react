import React from 'react';
import Header from './header';
import GradeTable from './gradetable';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grades: []
    };
    this.viewAllGrades = this.viewAllGrades.bind(this);
  }

  componentDidMount() {
    this.viewAllGrades();
  }

  viewAllGrades() {
    fetch('/api/grades')
      .then(res => res.json())
      .then(data => {
        this.setState({
          grades: data
        });
      })
      .catch(err => console.error(err));
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <Header text="Student Grade Table" />
        </div>
        <div className="row">
          <GradeTable grades={this.state.grades} />
        </div>
      </div>
    );
  }
}
export default App;
