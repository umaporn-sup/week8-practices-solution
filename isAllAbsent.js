//Write a function isAllAbsent(students) that checks if all students in the array are absent
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

function isAllAbsent(students) {
  return students.every((student) => student.absent)
}

console.log(isAllAbsent(students))
