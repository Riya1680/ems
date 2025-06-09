
const employees = [
  {
    id: "emp1",
    firstName: "Amit",
    email: "employee1@example.com",
    password: "123",
    taskStats: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Fix login bug",
        description: "Resolve issue causing login failures.",
        date: "2025-04-28",
        category: "Bug Fix"
      },
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        title: "Update landing page",
        description: "Redesign the landing page UI.",
        date: "2025-04-29",
        category: "Design"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Write unit tests",
        description: "Create unit tests for user module.",
        date: "2025-04-27",
        category: "Testing"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Deploy backend service",
        description: "Deploy service to production server.",
        date: "2025-04-26",
        category: "Deployment"
      }
    ]
  },
  {
    id: "emp2",
    firstName: "Priya",
    email: "employee2@example.com",
    password: "123",
    taskStats: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Refactor payment module",
        description: "Improve code structure of payment handling.",
        date: "2025-04-28",
        category: "Refactor"
      },
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        title: "Prepare monthly report",
        description: "Compile data and generate report for management.",
        date: "2025-04-30",
        category: "Reporting"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Optimize database queries",
        description: "Speed up slow queries in analytics module.",
        date: "2025-04-25",
        category: "Database"
      }
    ]
  },
  {
    id: "emp3",
    firstName: "Ravi",
    email: "employee3@example.com",
    password: "123",
    taskStats: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        title: "Onboard new intern",
        description: "Provide orientation and access setup.",
        date: "2025-05-01",
        category: "HR"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Fix CSS bugs",
        description: "Resolve responsive design issues.",
        date: "2025-04-28",
        category: "Bug Fix"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Migrate email server",
        description: "Switch from old email provider to new one.",
        date: "2025-04-22",
        category: "IT Operations"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Complete user feedback analysis",
        description: "Analyze and summarize user feedback.",
        date: "2025-04-24",
        category: "Research"
      }
    ]
  },
  {
    id: "emp4",
    firstName: "Neha",
    email: "employee4@example.com",
    password: "123",
    taskStats: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Set up CI/CD pipeline",
        description: "Automate testing and deployment.",
        date: "2025-04-28",
        category: "DevOps"
      },
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        title: "Write blog post",
        description: "Post about our latest product update.",
        date: "2025-05-01",
        category: "Marketing"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Create API documentation",
        description: "Document all REST APIs.",
        date: "2025-04-20",
        category: "Documentation"
      }
    ]
  },
  {
    id: "emp5",
    firstName: "Karan",
    email: "employee5@example.com",
    password: "123",
    taskStats: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Research competitor products",
        description: "Create a competitor feature analysis report.",
        date: "2025-04-29",
        category: "Research"
      },
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        title: "Fix notification bug",
        description: "Resolve issue with push notifications.",
        date: "2025-04-30",
        category: "Bug Fix"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Implement dark mode",
        description: "Add dark mode option to settings.",
        date: "2025-04-24",
        category: "Feature"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Update client contracts",
        description: "Revise contracts based on new policies.",
        date: "2025-04-23",
        category: "Legal"
      }
    ]
  }
];

  
        const admin =[ {
          "id": "admin1",
          "email": "admin@example.com",
          "password": "123"
        }];

export const setLocalStorage = () =>{
  localStorage.setItem('employees', JSON.stringify(employees))     //localstorage mein data ko save karne ka method ka name hai  loaclstorage.setitem
  localStorage.setItem('admin', JSON.stringify(admin))     //stringify means ki string mein convert karke send kiya hai
}  
export const getLocalStorage = () =>{
   const employees =  JSON.parse(localStorage.getItem('employees'))
   const admin =  JSON.parse(localStorage.getItem('admin'))
  //  console.log(employees, admin)
  return {employees, admin}
      //parse means data mujhe normal array ke form mein mile gay
}
      
      
  
  