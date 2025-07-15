import Student from "../models/student.js";

export function getStudents(req,res){

        //read and get all the students information from the mongoDB database
        Student.find().then(

            (data)=>{
                console.log(data)
                res.json(
                    data
                )
            }
        ).catch()
    }

export function createStudent(req,res){
                
        const student = new Student(
            {
                name : req.body.name,
                age : req.body.age,
                city: req.body.city
            }
        )

        student.save().then(
            ()=>{
                res.json(
                    {
                        message: "Student created successfully"
                    }
                )
            }
        ).catch(
            ()=>{
                res.json(
                    {
                        message: "Failed to create student"
                    }
                )
            }
        )

    }