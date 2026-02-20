import express from "express";

const app = express();
app.use(express.json())
const port = 3000;
const hostname = "127.0.0.1";

let employee = [];
let id = 1;

app.post("/",(req,res)=>{
    const {name,salary} = req.body;
    const newEmp = {id:id++,name,salary}
    employee.push(newEmp)
    res.status(200).send(newEmp)
})
app.get("/",(req,res)=>{
    res.status(200).send(employee)
})
app.get("/:id",(req,res)=>{
    const emp = employee.find(i => i.id === parseInt(req.params.id))
    if (!emp) {
        return res.status(404).send("OOPs!!employee not found...");
    }
     res.status(200).send(emp)
})
//UPDATING
app.put("/:id",(req,res)=>{
    const emp = employee.find(i => i.id === parseInt(req.params.id))
    if (!emp) {
        return res.status(404).send("OOPs!!employee not found...");
    }
    const {name,salary} = req.body;
    emp.name = name;
    emp.salary = salary;
     res.status(200).send(emp)
})

//DELETE
app.delete("/:id",(req,res)=>{
    const index = employee.findIndex(i => i.id === parseInt(req.params.id))
    if (index === -1) {
        return res.status(404).send("OOPs!!employee not found...");
    }
    employee.splice(index,1)
    return res.status(204).send("Deleted");
})
// app.get("/",(req,res)=>{
//     res.send("Hello world!!")
// })
// app.get("/hii",(req,res)=>{
//     res.send("HII There!!")
// })

app.listen(port,()=>{
    console.log(`Exapmle app is listining on port http://${hostname}:${port}` )
})
