const instructors = [
  {
    name: 'John',
    availability: 'all',
    specialities: ['Javascript', 'Python', 'C++'],
  },
  {
    name: 'Mary',
    availability: 'weekend',
    specialities: ['Javascript', 'Ruby', 'C++'],
  },
  {
    name: 'Chris',
    availability: 'evenings',
    specialities: ['Javascript'],
  },
  {
    name: 'Anthony',
    availability: 'all',
    specialities: ['Python', 'Ruby'],
  },
  {
    name: 'Pauline',
    availability: 'only Mondays',
    specialities: ['Javascript', 'Html', 'CSS'],
  },
  {
    name: 'Mark',
    availability: 'all',
    specialities: ['C#', 'C++', 'Javascript'],
  },
  {
    name: 'Helen',
    availability: 'evenings',
    specialities: ['Python', 'C++'],
  },
  {
    name: 'Charles',
    availability: 'none',
    specialities: ['Python'],
  },
];


const jsWeekendInstructors = instructors.filter(instructor =>
  instructor.specialities.includes('Javascript') &&
  (instructor.availability === 'weekend' || instructor.availability === 'all')
);


jsWeekendInstructors.forEach(instructor => {
  console.log(`Hi ${instructor.name}, we inform you that this weekend you will be doing the support class`);
});


jsWeekendInstructors.forEach(instructor => {
  if (instructor.specialities.includes('Python')) {
    console.log(`Hi ${instructor.name}, we inform you that this weekend you will be doing the support class and you need to prepare a Python workshop`);
  }
});
