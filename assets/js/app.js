let cl = console.log;

let students =[
  {
    "id": 1,
    "fname": "Rahul",
    "lname": "Sharma",
    "phone": "9876543210",
    "address": "Pune",
    "class": "10A"
  },
  {
    "id": 2,
    "fname": "Priya",
    "lname": "Patel",
    "phone": "9123456780",
    "address": "Ahmedabad",
    "class": "9B"
  },
  {
    "id": 3,
    "fname": "Amit",
    "lname": "Verma",
    "phone": "9988776655",
    "address": "Delhi",
    "class": "12C"
  },
  {
    "id": 4,
    "fname": "Sneha",
    "lname": "Joshi",
    "phone": "9090909090",
    "address": "Mumbai",
    "class": "11A"
  },
  {
    "id": 5,
    "fname": "Rohit",
    "lname": "Kumar",
    "phone": "9555544444",
    "address": "Patna",
    "class": "8C"
  }
]

let result =''

students.forEach(function(student){
 
    result +=`
                  <td>${student.id}</td>
                  <td>${student.fname}</td>
                  <td>${student.fname}</td>
                  <td>${student.phone}</td>
                  <td>${student.address}</td>
                  <td>${student.class}</td>

                  <td><i class="fa-solid fa-pen-to-square"></i></td>
                  <td><i class="fa-regular fa-trash-can"></i></td>
                </tr>
    `
})

let studentDataTable = document.getElementById('studentDataTable');
studentDataTable.innerHTML =result