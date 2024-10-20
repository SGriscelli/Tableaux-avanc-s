const instructors = [
    { name: "Alice", availability: "weekend", specialties: ["JavaScript", "HTML"] },
    { name: "Bob", availability: "all", specialties: ["Python", "JavaScript"] },
    { name: "Charlie", availability: "weekday", specialties: ["Java"] },
    { name: "David", availability: "weekend", specialties: ["JavaScript", "Python"] },
    { name: "Eve", availability: "all", specialties: ["C#", "JavaScript"] }
];

const jsWeekendInstructors = instructors.filter(instructor =>
    instructor.specialties.includes("JavaScript") &&
    (instructor.availability === "weekend" || instructor.availability === "all")
);

jsWeekendInstructors.forEach(instructor => {
    if (instructor.specialties.includes("Python")) {
        console.log(`Hi ${instructor.name}, we inform you that this weekend you will be doing the support class and you need to prepare a Python workshop`);
    } else {
        console.log(`Hi ${instructor.name}, we inform you that this weekend you will be doing the support class`);
    }
});