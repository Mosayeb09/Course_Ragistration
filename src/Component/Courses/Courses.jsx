import { useEffect } from "react";
import { useState } from "react";

import Course from "../Course/Course";


const Courses = ({handleSelect}) => {
    const [courses,setCourses] = useState([])
    useEffect(() => {
        fetch("course.json")
        .then(res => res.json())
        .then(data =>setCourses(data) )
    },[])
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 
            lg:grid-cols-3 gap-5 mt-5 w-3/4 ml-10">
            {
                courses.map(course => <Course key={course.id} 
                    handleSelect={handleSelect} course={course}></Course>)
            }
        </div>
    );
};

export default Courses;