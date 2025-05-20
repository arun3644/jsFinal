function get(){
    const http = new XMLHttpRequest();
    http.onload=function(){
        const result=document.getElementById("result");

        const students=JSON.parse(this.responseText);
        let output= `
            <table border="1 " cellpadding="5" cellspacing="0" >
                <tr>
                    <th>NAME</th>
                    <th>ROLL NO</th>
                    <th>EMAIL</th>
                    <th>COLLEGE NAME</th>
                </tr>
        `;

        students.forEach((s)=>{
            output+=`
                <tr>
                    <td>${s.name}</td>
                    <td>${s.rollno}</td>
                    <td>${s.email}</td>
                    <td>${s.college}</td>
                </tr>
            `;
        })

        output +="</table>";

        result.innerHTML=output;

    }
    http.open("GET","http://localhost:3000/student");
    http.send();
}

function add(){
        const http = new XMLHttpRequest();

    const data={
        id: Date.now(),
        name:document.getElementById("name").value,
        email:document.getElementById("email").value,
        rollno:parseInt(document.getElementById("rollno").value),
        college:document.getElementById("college").value
    }
    http.onload=function(){
        alert("Data Added Successfully");
    }
    http.open("POST","http://localhost:3000/student");
    http.send(JSON.stringify(data));
}


































// function get() {
//     fetch("http://localhost:3000/student")
//         .then((response) => {
//             if (!response.ok) throw new Error("Failed to Fetch Data")
//             return response.json();
//         })
//         .then(students => {
//             const result = document.getElementById("result");
//             let output = `
//             <table border="1 " cellpadding="5" cellspacing="0" >
//                 <tr>
//                     <th>NAME</th>
//                     <th>ROLL NO</th>
//                     <th>EMAIL</th>
//                     <th>COLLEGE NAME</th>
//                 </tr>
//         `;

//             students.forEach((s) => {
//                 output += `
//                 <tr>
//                     <td>${s.name}</td>
//                     <td>${s.rollno}</td>
//                     <td>${s.email}</td>
//                     <td>${s.college}</td>
//                 </tr>
//             `;
//             })

//             output += "</table>";

//             result.innerHTML = output;

//         }).catch(error => {
//             console.error("Error fetching data:", error);
//             document.getElementById('result').innerHTML = "Error loading data";
//         });
// }


// function add() {
//     const data = {
//         id: Date.now(),
//         name: document.getElementById("name").value,
//         email: document.getElementById("email").value,
//         rollno: parseInt(document.getElementById("rollno").value),
//         college: document.getElementById("college").value
//     }

//     fetch("http://localhost:3000/student", {
//         method: "POST",
//         headers: {
//             "content-type": "application/json"
//         },

//         body: JSON.stringify(data)
//     }
//     ).then((response)=>{
//         if(!response.ok) throw new Error("Failed to add Data");
//         alert("Data Added Successfully")
//     })
//     .catch((err)=>{
//         console.log(err);
//         alert("Failed to add Data");
//     })
// }