// import React, { useState } from "react";
// import { alter } from "./API";

// export const Update = ({ who, mention }) => {
//   const [pos] = useState(who);
//   const [person, setPerson] = useState({
//     resName: mention.resName,
//     resPay: mention.resPay,
//     resArea: mention.resArea,
//     resSkills: mention.resSkills,
//   });

//   const track = (e) => {
//     const { name, value } = e.target;
//     if (name === "resSkills") {
//       const skillsArray = value.split(",").map((s) => s.trim());
//       setPerson((prev) => ({ ...prev, resSkills: skillsArray }));
//     } else {
//       setPerson((prev) => ({ ...prev, [name]: value }));
//     }
//   };

//   const save = () => {
//     alter(pos, person);
//     alert("Updated " + person.resName);
//   };

//   return (
//     <div className="container-fluid mt-5">
//       <h1 className="text-center text-info display-4 text-uppercase font-monospace">
//         Edit Recruitment
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

//           <div className="form-group mt-3">
//             <label>Resource Skills (comma separated)</label>
//             <textarea
//               name="resSkills"
//               value={person.resSkills.join(", ")}
//               onChange={track}
//               className="form-control"
//             />
//           </div>

//           <div className="mt-4 row justify-content-around">
//             <button onClick={save} className="col-3 btn btn-outline-success">
//               Save
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// import React, { useState } from "react";
// import { alter } from "./API";

// export default function Update() {
//   const [id, setId] = useState("");
//   const [name, setName] = useState("");
//   const [salary, setSalary] = useState("");
//   const [location, setLocation] = useState("");
//   const [skills, setSkills] = useState("");

//   const handleUpdate = async (e) => {
//     e.preventDefault();
//     try {
//       // Convert skills string to array
//       const skillsArray = skills.split(",").map((s) => s.trim());

//       await alter(id, { name, salary, location, skills: skillsArray });

//       alert("Employee updated successfully!");
//       setId("");
//       setName("");
//       setSalary("");
//       setLocation("");
//       setSkills("");
//     } catch (error) {
//       console.error("Error updating employee:", error);
//       alert("Error updating employee. Check console.");
//     }
//   };

//   return (
//     <div>
//       <h2>Update Employee</h2>
//       <form onSubmit={handleUpdate}>
//         <input
//           type="text"
//           placeholder="Employee ID"
//           value={id}
//           onChange={(e) => setId(e.target.value)}
//           required
//         />
//         <input
//           type="text"
//           placeholder="Name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//         <input
//           type="number"
//           placeholder="Salary"
//           value={salary}
//           onChange={(e) => setSalary(e.target.value)}
//         />
//         <input
//           type="text"
//           placeholder="Location"
//           value={location}
//           onChange={(e) => setLocation(e.target.value)}
//         />
//         <input
//           type="text"
//           placeholder="Skills (comma separated)"
//           value={skills}
//           onChange={(e) => setSkills(e.target.value)}
//         />
//         <button type="submit">Update</button>
//       </form>
//     </div>
//   );
// }
import React, { useState, useEffect } from "react";
import { alter } from "./API";

export default function Update({ mention, reload }) {
  const [employee, setEmployee] = useState({
    name: "",
    salary: "",
    location: "",
    skills: [],
  });

  useEffect(() => {
    if (mention) {
      setEmployee({
        name: mention.name || "",
        salary: mention.salary || "",
        location: mention.location || "",
        skills: mention.skills || [],
      });
    }
  }, [mention]);

  const track = (e) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  };

  const tracks = (e) => {
    const { value, checked } = e.target;
    let updatedSkills = [...employee.skills];
    if (checked) {
      updatedSkills.push(value);
    } else {
      updatedSkills = updatedSkills.filter((s) => s !== value);
    }
    setEmployee({ ...employee, skills: updatedSkills });
  };

  const handleUpdate = async () => {
    try {
      await alter(mention.id, employee);
      alert("✅ Employee updated successfully!");
      reload();
    } catch (error) {
      console.error("Error updating employee:", error);
      alert("⚠️ Error updating employee. Check console.");
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-lg-6 col-md-8 col-sm-12">
          <div className="card shadow-lg border-0 rounded-4">
            <div
              className="card-header text-white text-center rounded-top-4"
              style={{ background: "linear-gradient(135deg, #fd7e14, #dc3545)" }}
            >
              <h3 className="mb-0 fw-bold">
                <i className="bi bi-pencil-square me-2"></i>Update Employee
              </h3>
            </div>

            <div className="card-body p-4">
              {/* Name */}
              <div className="mb-3">
                <label className="form-label fw-semibold">Employee Name</label>
                <input
                  type="text"
                  name="name"
                  value={employee.name}
                  onChange={track}
                  placeholder="Enter employee name"
                  className="form-control shadow-sm"
                />
              </div>

              {/* Salary + Location */}
              <div className="row mb-3">
                <div className="col-md-6">
                  <label className="form-label fw-semibold">Salary (₹)</label>
                  <input
                    type="number"
                    name="salary"
                    value={employee.salary}
                    onChange={track}
                    placeholder="Salary per day"
                    className="form-control shadow-sm"
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label fw-semibold">Location</label>
                  <select
                    name="location"
                    className="form-select shadow-sm"
                    value={employee.location}
                    onChange={track}
                  >
                    <option value="">Select Location</option>
                    <option>Chennai</option>
                    <option>Bangalore</option>
                    <option>Salem</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              {/* Skills */}
              <div className="mb-3">
                <label className="form-label fw-semibold">Skills</label>
                <div className="d-flex flex-wrap gap-3">
                  {["Java", "Python", "JavaScript"].map((skill) => (
                    <div className="form-check" key={skill}>
                      <input
                        type="checkbox"
                        value={skill}
                        checked={employee.skills.includes(skill)}
                        onChange={tracks}
                        className="form-check-input"
                        id={skill}
                      />
                      <label htmlFor={skill} className="form-check-label">
                        {skill}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Update Button */}
              <div className="text-center mt-4">
                <button
                  onClick={handleUpdate}
                  className="btn btn-lg px-5 text-white shadow"
                  style={{
                    background: "linear-gradient(135deg, #fd7e14, #dc3545)",
                  }}
                >
                  <i className="bi bi-arrow-repeat me-2"></i> Update Employee
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
