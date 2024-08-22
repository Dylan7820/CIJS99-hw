// **Bài 6
const listEmployee = [
    { id: 1, name: "A", workingday: 22},
    { id: 2, name: "B", workingDays: 20 },
    { id: 3, name: "C", workingDays: 25 },
]
total = () => {
    let result = 0;
    for (let i = 0; i < employees.length; i++) {
      result += employees[i].workingDays;
    }
    console.log(result);
  };
  total();
// **Bài 10
const employees10 = [
    { id: 1, name: "A", workingDays: 22, lateDays: 2, salary: 2000 },
    { id: 2, name: "B", workingDays: 25, lateDays: 0, salary: 2500 },
    { id: 3, name: "C", workingDays: 20, lateDays: 1, salary: 3000 },
  ];
  
  const { workingDays, salary } = employees10;
  const compare10 = (a, b) => {
    if (a > b) {
      return -1;
    }
    if (a < b) {
      return 1;
    }
    return 0;
  };
  const sortEfficiency = employees10.sort((a, b) =>
    compare10(a.workingDays / a.salary, b.workingDays / b.salary)
  );
  console.log(sortEfficiency);
  
  console.log(sortEfficiency[0]);
  // **Bài 11
  const employees = [
    { id: 1, name: "John", workingDays: 20 },
    { id: 2, name: "Jane", workingDays: 22 },
    { id: 3, name: "Mark", workingDays: 20 },
    { id: 4, name: "Sam", workingDays: 24 },
    { id: 5, name: "Lucy", workingDays: 22 },
];

function histogarmWorkingdays(employees) {
  return employees.reduce((arr, employee) => {
    let count = 0;
    let { workingDays } = employee;
    if(!arr[workingDays]){
      arr[workingDays]=[];
    }
    arr[workingDays].push(employee);

    return arr;
  },
)}
const result = histogarmWorkingdays(employees);
console.log(result);

{
  const employees = [
    { id: 1, name: "John", workingDays: 20 },
    { id: 2, name: "Jane", workingDays: 22 },
    { id: 3, name: "Mark", workingDays: 20 },
    { id: 4, name: "Sam", workingDays: 24 },
    { id: 5, name: "Lucy", workingDays: 22 },
  ];

  function getHistogram(employees) {
    return employees.reduce((obj, employee) => {
      let { workingDays } = employee;
      if (!obj[workingDays]) {
        obj[workingDays] = 0;
      }
      obj[workingDays]++;
      return obj;
    },
    );
  }
  let result = getHistogram(employees);
  console.log(result);
}
// **Bài 12
{
    const employees = [
      {
        id: 1,
        name: "John",
        email: "john@example.com",
        workingDays: 22,
        lateDays: 2,
        salary: 2000,
      },
      {
        id: 2,
        name: "Jane",
        email: "jane@example.com",
        workingDays: 20,
        lateDays: 0,
        salary: 2500,
      },
      {
        id: 3,
        name: "Mark",
        email: "mark@example.com",
        workingDays: 25,
        lateDays: 1,
        salary: 3000,
      },
    ];
  
    function makeNewEmployees(employees) {
      return employees.reduce((arr, emp) => {
        let { name, email, workingDays, lateDays } = emp;
        let obj = {
          name: name,
          email: email,
          workInfo: {
            workingDays: workingDays,
            lateDays: lateDays,
          },
        };
        arr.push(obj);
        return arr;
      }, []);
    }
    let result = makeNewEmployees(employees);
    console.log(result);
  }
  // **Bài 13
  {
    let tasks = [
      {
        name: "Hoàn thành bài tập JavaScript",
        description: "Làm xong bài tập về Array và Object",
        completed: false,
      },
      { name: "Đọc sách", description: "Đọc xong chương 3", completed: true },
      {
        name: "Đi mua hàng",
        description: "Mua thêm thức ăn cho tuần",
        completed: false,
      },
    ];
  
    function addNewWork(name, des) {
      tasks.push({ name, des, complete: false });
    }
  
    function checkDone(...args) {
      tasks.forEach((work) => {
        args.forEach((name) => {
          if (work.name === name) {
            work.completed = true;
          }
        });
      });
    }
  
    function sortByName(type) {
      if (type.toUpperCase() == "A-Z") {
        tasks.sort((a, b) => a["name"].localeCompare(b["name"]));
      } else {
        tasks.sort((a, b) => b["name"].localeCompare(a["name"]));
      }
    }
    // Thêm công việc mới
    addNewWork("Đi tập thể dục", "Chạy bộ 30 phút");
    console.log("Danh sách sau khi thêm công việc mới:");
    console.log(tasks);
    // Đánh dấu công việc hoàn thành
    checkDone("Đi mua hàng", "Hoàn thành bài tập JavaScript");
    console.log("Danh sách sau khi đánh dấu hoàn thành:");
    console.log(tasks);
    // sắp xếp theo bảng chữ cái
    sortByName("a-z");
    console.log(tasks);
  }