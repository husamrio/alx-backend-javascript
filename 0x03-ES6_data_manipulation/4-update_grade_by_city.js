/**
 * Updates list of students in a given city
 * @param {id: Number} students
 * @param {*firstName: String} city
 * @param {*location: String} newGrades
 * @returns
 */
export default function updateStudentGradeByCity(students, city, newGrades) {
  if (!Array.isArray(students)) {
    return [];
  }
  if (!Array.isArray(newGrades)) {
    return [];
  }
  return students
    .filter((student) => student.location === city)
    .map((student) => {
      const [newGrade] = newGrades.filter((item) => item.studentId === student.id);
      return {
        ...student,
        grade: newGrade ? newGrade.grade : 'N/A',
      };
    });
}
