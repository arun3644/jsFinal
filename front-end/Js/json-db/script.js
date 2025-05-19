function add() {
    const data = {
        id: Date.now(),
        name: document.getElementById("name").value,
        rollno: document.getElementById("rollno").value,
        email: document.getElementById("email").value,
        age: parseInt(document.getElementById("age").value),
        college: document.getElementById("college").value
    };

    const http = new XMLHttpRequest();
    http.open("POST", "http://localhost:3000/student");
    http.setRequestHeader("Content-type", "application/json");
    http.onload = function () {
        alert("Student added successfully!");
    };
    http.send(JSON.stringify(data));
}


function get() {
    const http = new XMLHttpRequest();
    
    http.onload = function () {
        const students = JSON.parse(this.responseText);
  
        let output = `
            <table border="1" cellpadding="5" cellspacing="0">
                <tr>
                    <th>Name</th>
                    <th>Roll No</th>
                    <th>Email</th>
                    <th>Age</th>
                    <th>College</th>
                </tr>
        `;

        students.forEach((s) => {
            output += `
                <tr>
                    <td>${s.name}</td>
                    <td>${s.rollno}</td>
                    <td>${s.email}</td>
                    <td>${s.age}</td>
                    <td>${s.college}</td>
                </tr>
            `;
        });

        output += "</table>";

        document.getElementById("result").innerHTML = output;
    };
    http.open("GET", "http://localhost:3000/student");
    http.send();
}
