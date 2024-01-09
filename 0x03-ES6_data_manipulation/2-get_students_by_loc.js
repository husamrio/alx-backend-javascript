/**
 * Students retrived in a given location
 * @param {*} students
 * @param {*} city
 * @returns
 */
export default function getStudentsByLocation(students, city) {
  if (Array.isArray(students)) {
    return students.filter((items) => items.location === city);
  }
  return [];
}
