import React from 'react';
import Grade from './grade';

function GradeTable(props) {
  return (
    <table className="table col-7 table-striped table-bordered">
      <thead className="thead-dark">
        <tr>
          <th scope="col">Student Name</th>
          <th scope="col">Course</th>
          <th scope="col">Grade</th>
        </tr>
      </thead>
      <tbody>
        {
          props.grades.map(grade => {
            return (
              <Grade
                key={grade.id}
                grade={grade}
              />
            );
          })
        }
      </tbody>
    </table>
  );
}

export default GradeTable;
