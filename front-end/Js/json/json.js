function add(){
    const http=new XMLHttpRequest();

    const data={
        id:  Date.now(),
        name:document.getElementById('name').value,
        rollNo:document.getElementById("rollNo").value,
        email:document.getElementById("email").value,
        college:document.getElementById("college").value

    }
    http.onload=function(){
        alert("data inserted Successfully");
    }
    http.open("POST",'http://localhost:3001/student');
    http.setRequestHeader("Content-Type", "application/json");
    http.send(JSON.stringify(data));
}


function get(){
    const http=new XMLHttpRequest();
    http.onload=function(){
        const result=document.getElementById('result');

        const students= JSON.parse(this.responseText);
        let output = `
        <table border="1" cellpadding="5" cellspacing="0">
            <tr>
                <th>NAME</th>
                <th>ROLL NO</th>
                <th>EMAIL</th>
                <th>COLLeGE</th>
            </tr>      
        `;

        students.forEach((s)=>{
            output += `
            <tr>
                <td>${s.name}</td>
                <td>${s.rollNo}</td>
                <td>${s.email}</td>
                <td>${s.college}</td> 
            </tr>  
        `;
        })

        output += "</table>"

       result.innerHTML=output;
        
    }
    http.open("GET","http://localhost:3001/student");
    http.send();
    
}