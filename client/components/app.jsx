import React from 'react';
import Header from './header';
import GradeTable from './gradetable';
import GradeForm from './gradeform';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grades: []
    };
    this.viewAllGrades = this.viewAllGrades.bind(this);
    this.getAverageGrade = this.getAverageGrade.bind(this);
    this.addGrade = this.addGrade.bind(this);
    this.deleteGrade = this.deleteGrade.bind(this);
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

  addGrade(grade) {
    const postMethod = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(grade)
    };

    fetch('/api/grades', postMethod)
      .then(res => res.json())
      .then(data =>
        this.setState({
          grades: this.state.grades.concat(grade)
        })
      )
      .catch(err => console.error(err));
  }

  deleteGrade(id) {
    const newList = this.state.grades.slice();
    const gradeIndex = this.state.grades.findIndex(grade => id === grade.id);
    newList.splice(gradeIndex, 1);

    const deleteMethod = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    };
    fetch(`/api/grades/${id}`, deleteMethod)
      .then(res => res.json())
      .then(data => {
        this.setState({
          grades: newList
        });
      })
      .catch(err => console.error(err));
  }

  render() {
    const avg = this.getAverageGrade();
    return (
      <div className="container">
        <div className="row">
          <Header text="Student Grade Table" average={avg}/>
        </div>
        <div className="row justify-content-around">
          <GradeTable grades={this.state.grades} delete={this.deleteGrade} />
          <GradeForm onSubmit={this.addGrade} />
        </div>
      </div>
    );
  }
}
export default App;
