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
    this.getAverageGrade = this.getAverageGrade.bind(this);
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

  getAverageGrade() {
    let total = 0;
    let avg = 0;
    for (let i = 0; i < this.state.grades.length; i++) {
      total += this.state.grades[i].grade;
    }
    if (this.state.grades.length === 0) {
      return 'N/A';
    } else {
      avg = Math.trunc(total / this.state.grades.length);
      return avg;
    }
  }

  render() {
    const avg = this.getAverageGrade();
    return (
      <div className="container">
        <div className="row">
          <Header text="Student Grade Table" average={avg}/>
        </div>
        <div className="row">
          <GradeTable grades={this.state.grades} />
        </div>
      </div>
    );
  }
}
export default App;
