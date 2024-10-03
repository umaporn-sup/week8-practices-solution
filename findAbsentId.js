//Write a function findAbsentId(students) that is to filter out students who are absent and then return their IDs.
const students = [
  {
    id: 1,
    absent: true
  },
  {
    id: 2,
    absent: false
  },
  {
    id: 3,
    absent: true
  },
  {
    id: 4,
    absent: false
  },
  {
    id: 5,
    absent: false
  }
]

function findAbsentId(students) {
  return students
    .filter((student) => student.absent)
    .map((student) => student.id)
}

console.log(findAbsentId(students)) // Output: [1, 3]
