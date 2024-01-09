/**
 * Retrives sum of ids of a list of students
 * @param {id number} students
 * @returns
 */
export default function getStudentIdsSum(students) {
  if (Array.isArray(students)) {
    return students.reduce((accumulator, each) => accumulator + each.id, 0);
  }
  return [];
}
