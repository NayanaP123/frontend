import commonApi from "./commonApi";
import server_url from "./base_url";


// register admin
export const registerAPI=async(reqBody)=>{
    return await commonApi("POST",`${server_url}/register`,reqBody)
}

// login admin
export const loginAdminAPI=async(reqBody)=>{
    return await commonApi("POST",`${server_url}/login`,reqBody)
}

// add student
export const addStudentAPI=async(reqBody)=>{
    return await commonApi("POST",`${server_url}/addstudent`,reqBody)
}

// student admin
export const loginStudentAPI=async(reqBody)=>{
    return await commonApi("POST",`${server_url}/loginstudent`,reqBody)
}


// Get all students
export const getStudentAPI = async () => {
    return await commonApi("GET", `${server_url}/getstudents`);
};

// Update student
export const updateStudentAPI = async (id, reqBody) => {
    return await commonApi("PUT", `${server_url}/updatestudent/${id}`, reqBody);
};

// Delete student
export const deleteStudentAPI = async (id) => {
    return await commonApi("DELETE", `${server_url}/deletestudent/${id}`);
};




// Add subject
export const addSubjectAPI = async (reqBody) => {
    return await commonApi("POST", `${server_url}/addsubject`, reqBody);
};

// Get all subjects
export const getSubjectsAPI = async () => {
    return await commonApi("GET", `${server_url}/getsubjects`);
};

// Update subject
export const updateSubjectAPI = async (id, reqBody) => {
    return await commonApi("PUT", `${server_url}/updatesubject/${id}`, reqBody);
};

// Delete subject
export const deleteSubjectAPI = async (id) => {
    return await commonApi("DELETE", `${server_url}/deletesubject/${id}`);
};



// Add class
export const addClassAPI = async (reqBody) => {
    return await commonApi("POST", `${server_url}/addclass`, reqBody);
};

// Get all classes
export const getClassAPI = async () => {
    return await commonApi("GET", `${server_url}/getclasses`);
};

// Update class
export const updateClassAPI = async (id, reqBody) => {
    return await commonApi("PUT", `${server_url}/updateclass/${id}`, reqBody);
};

// Delete class
export const deleteClassAPI = async (id) => {
    return await commonApi("DELETE", `${server_url}/deleteclass/${id}`);
};



// Add Schedule
export const addScheduleAPI = async (reqBody) => {
    return await commonApi("POST", `${server_url}/addschedule`, reqBody);
};

// Get all Schedules
export const getScheduleAPI = async () => {
    return await commonApi("GET", `${server_url}/getschedules`);
};

// Update Schedule
export const updateScheduleAPI = async (id, reqBody) => {
    return await commonApi("PUT", `${server_url}/updateschedule/${id}`, reqBody);
};

// Delete Schedule
export const deleteScheduleAPI = async (id) => {
    return await commonApi("DELETE", `${server_url}/deleteschedule/${id}`);
};



// Add class
export const addExamAPI = async (reqBody) => {
    return await commonApi("POST", `${server_url}/addexam`, reqBody);
};

// Get all classes
export const getExamAPI = async () => {
    return await commonApi("GET", `${server_url}/getexams`);
};

// Update class
export const updateExamAPI = async (id, reqBody) => {
    return await commonApi("PUT", `${server_url}/updateexam/${id}`, reqBody);
};

// Delete class
export const deleteExamAPI = async (id) => {
    return await commonApi("DELETE", `${server_url}/deleteexam/${id}`);
};

