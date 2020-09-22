import React from 'react';

function Grade(props) {
  const grade = props.grade;
  const studentId = grade.id;
  const name = grade.name;
  const studentGrade = grade.grade;
  const course = grade.course;

  return (
    <tr scope="row" id={ studentId }>
      <td>{ name }</td>
      <td>{ course }</td>
      <td>{ studentGrade }</td>
    </tr>
  );
}

export default Grade;
