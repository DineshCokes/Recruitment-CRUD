// import React from "react";
// import { useState } from "react";
// import { create } from "./API";
// import "bootstrap/dist/css/bootstrap.min.css";

// export const Recruite = () => {
//   const [person, setPerson] = useState({
//     resName: "",
//     resPay: 0,
//     resArea: "",
//     resSkills: [],
//   });

//   const track = (e) => {
//     const { name, value } = e.target;
//     setPerson((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const tracks = (e) => {
//     const { value, checked } = e.target;
//     setPerson((prev) => {
//       let updatedSkills = [...prev.resSkills];
//       if (checked) {
//         updatedSkills.push(value);
//       } else {
//         updatedSkills = updatedSkills.filter((skill) => skill !== value);
//       }
//       return { ...prev, resSkills: updatedSkills };
//     });
//   };

//   const hire = () => {
//     create(person);
//     alert("Hired " + person.resName);
//   };

//   return (
//     <div className="container-fluid mt-5">
//       <h1 className="text-center text-info display-4 text-uppercase font-monospace">
//         New Recruitment
//       </h1>
//       <div className="row justify-content-center">
//         <div className="col-lg-7 col-md-10 col-sm-12 shadow-lg p-3">
//           <div className="form-group">
//             <label>Resource Name</label>
//             <input
//               type="text"
//               name="resName"
//               value={person.resName}
//               onChange={track}
//               placeholder="Name of the resource"
//               className="form-control"
//             />
//           </div>

//           <div className="row justify-content-between mt-3">
//             <div className="col-md-6">
//               <label>Resource Commercial</label>
//               <input
//                 type="number"
//                 name="resPay"
//                 value={person.resPay}
//                 onChange={track}
//                 placeholder="Commercial per day"
//                 className="form-control"
//               />
//             </div>
//             <div className="col-md-6">
//               <label>Resource Location</label>
//               <select
//                 name="resArea"
//                 className="form-select"
//                 value={person.resArea}
//                 onChange={track}
//               >
//                 <option value="">Select Location</option>
//                 <option>Chennai</option>
//                 <option>Banglore</option>
//                 <option>Salem</option>
//                 <option>Other</option>
//               </select>
//             </div>
//           </div>

//           <div className="form-check-inline mt-3">
//             <label className="me-3">Skills</label>
//             <input
//               type="checkbox"
//               value="Java"
//               checked={person.resSkills.includes("Java")}
//               onChange={tracks}
//               className="form-check-input"
//             />
//             Java
//             <input
//               type="checkbox"
//               value="Python"
//               checked={person.resSkills.includes("Python")}
//               onChange={tracks}
//               className="form-check-input ms-3"
//             />
//             Python
//             <input
//               type="checkbox"
//               value="JavaScript"
//               checked={person.resSkills.includes("JavaScript")}
//               onChange={tracks}
//               className="form-check-input ms-3"
//             />
//             JavaScript
//           </div>

//           <div className="mt-4 row justify-content-around">
//             <button onClick={hire} className="col-3 btn btn-outline-success">
//               Hire
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };


// import React, { useState } from "react";
// import { create } from "./API";

// export default function NewResource() {
//   const [name, setName] = useState("");
//   const [salary, setSalary] = useState("");
//   const [location, setLocation] = useState("");
//   const [skills, setSkills] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       // Convert skills string into array
//       const skillsArray = skills.split(",").map((s) => s.trim());

//       await create({ name, salary, location, skills: skillsArray });

//       alert("Employee created successfully!");
//       setName("");
//       setSalary("");
//       setLocation("");
//       setSkills("");
//     } catch (error) {
//       console.error("Error creating employee:", error);
//       alert("Error creating employee. Check console.");
//     }
//   };

//   return (
//     <div>
//       <h2>Add Employee</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           required
//         />
//         <input
//           type="number"
//           placeholder="Salary"
//           value={salary}
//           onChange={(e) => setSalary(e.target.value)}
//           required
//         />
//         <input
//           type="text"
//           placeholder="Location"
//           value={location}
//           onChange={(e) => setLocation(e.target.value)}
//           required
//         />
//         <input
//           type="text"
//           placeholder="Skills (comma separated)"
//           value={skills}
//           onChange={(e) => setSkills(e.target.value)}
//         />
//         <button type="submit">Add</button>
//       </form>
//     </div>
//   );
// }

// import React, { useState } from "react";
// import { create } from "./API";

// export default function NewResource({ reload }) {
//   const [employee, setEmployee] = useState({
//     name: "",
//     salary: "",
//     location: "",
//     skills: [],
//   });

//   const track = (e) => {
//     const { name, value } = e.target;
//     setEmployee({ ...employee, [name]: value });
//   };

//   const tracks = (e) => {
//     const { value, checked } = e.target;
//     let updatedSkills = [...employee.skills];
//     if (checked) {
//       updatedSkills.push(value);
//     } else {
//       updatedSkills = updatedSkills.filter((s) => s !== value);
//     }
//     setEmployee({ ...employee, skills: updatedSkills });
//   };

//   const hire = async () => {
//     try {
//       await create(employee);
//       alert("Employee added successfully!");
//       setEmployee({ name: "", salary: "", location: "", skills: [] });
//       reload(); // refresh employee list
//     } catch (error) {
//       console.error("Error creating employee:", error);
//       alert("Error creating employee. Check console.");
//     }
//   };

//   return (
//     <div className="container-fluid mt-5">
//       <h1 className="text-center text-info display-4 text-uppercase font-monospace">
//         New Recruitment
//       </h1>
//       <div className="row justify-content-center">
//         <div className="col-lg-7 col-md-10 col-sm-12 shadow-lg p-4 rounded bg-light">
//           {/* Name */}
//           <div className="form-group mb-3">
//             <label>Employee Name</label>
//             <input
//               type="text"
//               name="name"
//               value={employee.name}
//               onChange={track}
//               placeholder="Enter employee name"
//               className="form-control"
//               required
//             />
//           </div>

//           {/* Salary + Location */}
//           <div className="row justify-content-between mb-3">
//             <div className="col-md-6">
//               <label>Employee Salary</label>
//               <input
//                 type="number"
//                 name="salary"
//                 value={employee.salary}
//                 onChange={track}
//                 placeholder="Salary per day"
//                 className="form-control"
//                 required
//               />
//             </div>
//             <div className="col-md-6">
//               <label>Employee Location</label>
//               <select
//                 name="location"
//                 className="form-select"
//                 value={employee.location}
//                 onChange={track}
//                 required
//               >
//                 <option value="">Select Location</option>
//                 <option>Chennai</option>
//                 <option>Bangalore</option>
//                 <option>Salem</option>
//                 <option>Other</option>
//               </select>
//             </div>
//           </div>

//           {/* Skills */}
//           <div className="form-check-inline mb-3">
//             <label className="me-3">Skills</label>
//             <input
//               type="checkbox"
//               value="Java"
//               checked={employee.skills.includes("Java")}
//               onChange={tracks}
//               className="form-check-input"
//             />
//             Java
//             <input
//               type="checkbox"
//               value="Python"
//               checked={employee.skills.includes("Python")}
//               onChange={tracks}
//               className="form-check-input ms-3"
//             />
//             Python
//             <input
//               type="checkbox"
//               value="JavaScript"
//               checked={employee.skills.includes("JavaScript")}
//               onChange={tracks}
//               className="form-check-input ms-3"
//             />
//             JavaScript
//           </div>

//           {/* Submit */}
//           <div className="mt-4 row justify-content-around">
//             <button
//               onClick={hire}
//               className="col-4 btn btn-outline-success fw-bold"
//             >
//               <i className="bi bi-person-plus-fill"></i> Hire
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// import React, { useState } from "react";
// import { create } from "./API";

// export default function NewResource({ reload }) {
//   const [employee, setEmployee] = useState({
//     name: "",
//     salary: "",
//     location: "",
//     skills: [],
//   });

//   const track = (e) => {
//     const { name, value } = e.target;
//     setEmployee({ ...employee, [name]: value });
//   };

//   const tracks = (e) => {
//     const { value, checked } = e.target;
//     let updatedSkills = [...employee.skills];
//     if (checked) {
//       updatedSkills.push(value);
//     } else {
//       updatedSkills = updatedSkills.filter((s) => s !== value);
//     }
//     setEmployee({ ...employee, skills: updatedSkills });
//   };

//   const hire = async () => {
//     try {
//       await create(employee);
//       alert("🎉 Employee added successfully!");
//       setEmployee({ name: "", salary: "", location: "", skills: [] });
//       reload();
//     } catch (error) {
//       console.error("Error creating employee:", error);
//       alert("⚠️ Error creating employee. Check console.");
//     }
//   };

//   return (
//     <div className="container mt-5">
//       <div className="row justify-content-center">
//         <div className="col-lg-6 col-md-8 col-sm-12">
//           <div className="card shadow-lg border-0 rounded-4">
//             <div className="card-header bg-gradient text-white text-center rounded-top-4"
//               style={{ background: "linear-gradient(135deg, #0d6efd, #6610f2)" }}
//             >
//               <h3 className="mb-0 fw-bold">
//                 <i className="bi bi-person-badge-fill me-2"></i>New Recruitment
//               </h3>
//             </div>

//             <div className="card-body p-4">
//               {/* Name */}
//               <div className="mb-3">
//                 <label className="form-label fw-semibold">Employee Name</label>
//                 <input
//                   type="text"
//                   name="name"
//                   value={employee.name}
//                   onChange={track}
//                   placeholder="Enter employee name"
//                   className="form-control shadow-sm"
//                   required
//                 />
//               </div>

//               {/* Salary + Location */}
//               <div className="row mb-3">
//                 <div className="col-md-6">
//                   <label className="form-label fw-semibold">Salary (₹)</label>
//                   <input
//                     type="number"
//                     name="salary"
//                     value={employee.salary}
//                     onChange={track}
//                     placeholder="Salary per day"
//                     className="form-control shadow-sm"
//                     required
//                   />
//                 </div>
//                 <div className="col-md-6">
//                   <label className="form-label fw-semibold">Location</label>
//                   <select
//                     name="location"
//                     className="form-select shadow-sm"
//                     value={employee.location}
//                     onChange={track}
//                     required
//                   >
//                     <option value="">Select Location</option>
//                     <option>Chennai</option>
//                     <option>Bangalore</option>
//                     <option>Salem</option>
//                     <option>Other</option>
//                   </select>
//                 </div>
//               </div>

//               {/* Skills */}
//               <div className="mb-3">
//                 <label className="form-label fw-semibold">Skills</label>
//                 <div className="d-flex flex-wrap gap-3">
//                   {["Java", "Python", "JavaScript"].map((skill) => (
//                     <div className="form-check" key={skill}>
//                       <input
//                         type="checkbox"
//                         value={skill}
//                         checked={employee.skills.includes(skill)}
//                         onChange={tracks}
//                         className="form-check-input"
//                         id={skill}
//                       />
//                       <label htmlFor={skill} className="form-check-label">
//                         {skill}
//                       </label>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               {/* Submit */}
//               <div className="text-center mt-4">
//                 <button
//                   onClick={hire}
//                   className="btn btn-lg px-5 text-white shadow"
//                   style={{
//                     background: "linear-gradient(135deg, #198754, #20c997)",
//                   }}
//                 >
//                   <i className="bi bi-check-circle-fill me-2"></i> Hire Employee
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
// import React, { useState } from "react";
// import { create } from "./API";

// export default function NewResource({ reload }) {
//   const [person, setPerson] = useState({
//     resName: "",
//     resPay: "",
//     resArea: "",
//     resSkills: [],
//   });

//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState("");

//   const track = (e) => {
//     const { name, value } = e.target;
//     setPerson({ ...person, [name]: value });
//   };

//   const tracks = (e) => {
//     let updatedSkills = [...person.resSkills];
//     if (e.target.checked) {
//       updatedSkills.push(e.target.value);
//     } else {
//       updatedSkills = updatedSkills.filter((s) => s !== e.target.value);
//     }
//     setPerson({ ...person, resSkills: updatedSkills });
//   };

//   const hire = async () => {
//     setError("");
//     setSuccess("");

//     // Validation
//     if (!person.resName.trim() || !person.resPay || !person.resArea) {
//       setError("Please fill all required fields (Name, Commercial, Location).");
//       return;
//     }
//     if (isNaN(person.resPay) || Number(person.resPay) <= 0) {
//       setError("Commercial must be a positive number.");
//       return;
//     }

//     try {
//       await create(person);
//       setSuccess("Employee added successfully!");
//       setPerson({ resName: "", resPay: "", resArea: "", resSkills: [] });
//       if (reload) reload();
//     } catch (err) {
//       setError("Error adding employee. Please try again.");
//       console.error(err);
//     }
//   };

//   return (
//     <div className="container-fluid mt-5">
//       <h1 className="text-center text-info display-4 text-uppercase font-monospace">
//         New Recruitment
//       </h1>

//       <div className="row justify-content-center">
//         <div className="col-lg-7 col-md-10 col-sm-12 shadow-lg p-4 rounded bg-light">
          
//           {/* Alerts */}
//           {error && <div className="alert alert-danger">{error}</div>}
//           {success && <div className="alert alert-success">{success}</div>}

//           <div className="form-group">
//             <label>Resource Name</label>
//             <input
//               type="text"
//               name="resName"
//               value={person.resName}
//               onChange={track}
//               placeholder="Name of the resource"
//               className="form-control"
//               required
//             />
//           </div>

//           <div className="row justify-content-between mt-3">
//             <div className="col-md-6">
//               <label>Resource Commercial</label>
//               <input
//                 type="number"
//                 name="resPay"
//                 value={person.resPay}
//                 onChange={track}
//                 placeholder="Commercial per day"
//                 className="form-control"
//                 required
//               />
//             </div>
//             <div className="col-md-6">
//               <label>Resource Location</label>
//               <select
//                 name="resArea"
//                 className="form-select"
//                 value={person.resArea}
//                 onChange={track}
//                 required
//               >
//                 <option value="">Select Location</option>
//                 <option>Chennai</option>
//                 <option>Bangalore</option>
//                 <option>Salem</option>
//                 <option>Other</option>
//               </select>
//             </div>
//           </div>

//           <div className="form-check-inline mt-3">
//             <label className="me-3">Skills</label>
//             <input
//               type="checkbox"
//               value="Java"
//               checked={person.resSkills.includes("Java")}
//               onChange={tracks}
//               className="form-check-input"
//             /> Java
//             <input
//               type="checkbox"
//               value="Python"
//               checked={person.resSkills.includes("Python")}
//               onChange={tracks}
//               className="form-check-input ms-3"
//             /> Python
//             <input
//               type="checkbox"
//               value="JavaScript"
//               checked={person.resSkills.includes("JavaScript")}
//               onChange={tracks}
//               className="form-check-input ms-3"
//             /> JavaScript
//           </div>

//           <div className="mt-4 row justify-content-around">
//             <button onClick={hire} className="col-3 btn btn-outline-success">
//               Hire
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useState } from "react";
import { create } from "./API";

export default function NewResource({ reload }) {
  const [person, setPerson] = useState({
    resName: "",
    resPay: "",
    resArea: "",
    resSkills: [],
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const track = (e) => {
    const { name, value } = e.target;
    setPerson({ ...person, [name]: value });
  };

  const tracks = (e) => {
    let updatedSkills = [...person.resSkills];
    if (e.target.checked) {
      updatedSkills.push(e.target.value);
    } else {
      updatedSkills = updatedSkills.filter((s) => s !== e.target.value);
    }
    setPerson({ ...person, resSkills: updatedSkills });
  };

  const hire = async () => {
    setError("");
    setSuccess("");

    if (!person.resName.trim() || !person.resPay || !person.resArea) {
      setError("Please fill all required fields (Name, Commercial, Location).");
      return;
    }
    if (isNaN(person.resPay) || Number(person.resPay) <= 0) {
      setError("Commercial must be a positive number.");
      return;
    }

    try {
      await create(person);
      setSuccess("✅ Employee added successfully!");
      setPerson({ resName: "", resPay: "", resArea: "", resSkills: [] });
      if (reload) reload();
    } catch (err) {
      setError("❌ Error adding employee. Please try again.");
      console.error(err);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-lg-6 col-md-8 col-sm-12">
          <div className="card shadow-lg border-0 rounded-4">
            <div className="card-header bg-info text-white text-center rounded-top-4">
              <h3 className="m-0 text-uppercase">Hire New Resource</h3>
            </div>
            <div className="card-body bg-light p-4">

              {/* Alerts */}
              {error && <div className="alert alert-danger">{error}</div>}
              {success && <div className="alert alert-success">{success}</div>}

              <div className="mb-3">
                <label className="form-label fw-bold">Resource Name</label>
                <input
                  type="text"
                  name="resName"
                  value={person.resName}
                  onChange={track}
                  placeholder="Enter resource name"
                  className="form-control"
                  required
                />
              </div>

              <div className="row">
                <div className="col-md-6 mb-3">
                  <label className="form-label fw-bold">Commercial</label>
                  <input
                    type="number"
                    name="resPay"
                    value={person.resPay}
                    onChange={track}
                    placeholder="Per day rate"
                    className="form-control"
                    required
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label fw-bold">Location</label>
                  <select
                    name="resArea"
                    className="form-select"
                    value={person.resArea}
                    onChange={track}
                    required
                  >
                    <option value="">Select Location</option>
                    <option>Chennai</option>
                    <option>Bangalore</option>
                    <option>Salem</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              <div className="mb-3">
                <label className="form-label fw-bold">Skills</label>
                <div className="d-flex flex-wrap gap-3">
                  {["Java", "Python", "JavaScript"].map((skill) => (
                    <div key={skill} className="form-check">
                      <input
                        type="checkbox"
                        value={skill}
                        checked={person.resSkills.includes(skill)}
                        onChange={tracks}
                        className="form-check-input"
                        id={skill}
                      />
                      <label className="form-check-label" htmlFor={skill}>
                        {skill}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="text-center mt-4">
                <button onClick={hire} className="btn btn-success px-4 py-2 rounded-pill shadow-sm">
                  <i className="bi bi-person-plus-fill me-2"></i> Hire Resource
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
