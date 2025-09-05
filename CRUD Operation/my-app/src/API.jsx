// let myemployees = [
//   {
//     resName: "Razak Mohamed S",
//     resPay: 200000,
//     resArea: "Salem",
//     resSkills: ["Java", "JavaScript", "Python"],
//   },
//   {
//     resName: "Rasheedha R",
//     resPay: 200000,
//     resArea: "Salem",
//     resSkills: ["JavaScript", "Python"],
//   },
//   {
//     resName: "Titus C",
//     resPay: 10000,
//     resArea: "Chennai",
//     resSkills: ["Java"],
//   },
//   {
//     resName: "Murali S",
//     resPay: 50000,
//     resArea: "Banglore",
//     resSkills: ["Java", "Python"],
//   },
// ];

// export const create = (obj) => {
//   myemployees.push(obj);
// };

// export const list = () => {
//   return myemployees;
// };

// export const read = (index) => {
//   return myemployees[index];
// };

// export const fetchExact = (name) => {
//   return myemployees.find((element) => element.resName === name);
// };

// export const alter = (place, data) => {
//   myemployees[place] = data;
// };

// export const wash = (index) => {
//   myemployees = myemployees.filter((_, i) => i !== index);
//   return myemployees;
// };
import axios from "axios";

const API_BASE = "http://localhost:8080/api/employees";

// CREATE (POST)
export const create = async (employee) => {
  try {
    const res = await axios.post(API_BASE, employee);
    return res.data;
  } catch (err) {
    console.error("Error creating employee:", err);
    throw err;
  }
};


// READ ALL (GET)
export const readAll = async () => {
  try {
    const res = await axios.get(API_BASE);
    return res.data;
  } catch (err) {
    console.error("Error reading employees:", err);
    throw err;
  }
};

// READ ONE (GET)
export const read = async (id) => {
  try {
    const res = await axios.get(`${API_BASE}/${id}`);
    return res.data;
  } catch (err) {
    console.error("Error reading employee:", err);
    throw err;
  }
};

// UPDATE (PUT)
export const alter = async (id, employee) => {
  try {
    const res = await axios.put(`${API_BASE}/${id}`, employee);
    return res.data;
  } catch (err) {
    console.error("Error updating employee:", err);
    throw err;
  }
};


// DELETE (DELETE)
export const remove = async (id) => {
  try {
    await axios.delete(`${API_BASE}/${id}`);
  } catch (err) {
    console.error("Error deleting employee:", err);
    throw err;
  }
};
