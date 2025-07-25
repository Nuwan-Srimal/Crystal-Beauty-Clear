import Student from "../models/student.js";

export async function getStudents(req, res){
	//read and get all the students information from the mongoDB database
    try {
	const student = await Student.find();
	res.json(student);
	}catch(err){
		console.error(err);
		res.status(500).json({
			message: "Failed to retrieve students"
		});
	}
}

export function createStudent(req, res){

	if(req.user == null){
		res.status(401).json({
			message : "Please login and try again"
		})
		return
	}

	if(req,user.role != "admin"){
		res.status(403).json({
			message: "You are not authorized to create a student"
		})
		return
	}



	const student = new Student({
		name: req.body.name,
		age: req.body.age,
		city: req.body.city,
	});

	student
		.save()
		.then(() => {
			res.json({
				message: "Student created successfully",
			});
		})
		.catch(() => {
			res.json({
				message: "Failed to create student",
			});
		});
}
