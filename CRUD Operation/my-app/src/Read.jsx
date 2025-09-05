// import React, { useEffect, useState } from "react";
// import { read } from "./API";

// export const Read = ({ who }) => {
//   const [employee, setEmployee] = useState({
//     resName: "",
//     resArea: "",
//     resPay: 0,
//     resSkills: [],
//   });

//   useEffect(() => {
//     setEmployee(read(who));
//   }, [who]);

//   return (
//     <div className="container mt-5">
//       <div className="row justify-content-center">
//         <div className="card col-lg-7 col-md-10 col-sm-12 p-4 bg-dark text-light">
//           <h1 className="card-title text-center">{employee.resName}</h1>
//           <div className="card-body">
//             <p className="float-start">{employee.resArea}</p>
//             <p className="float-end">{employee.resPay}</p>
//             <p className="text-center">{employee.resSkills.join(", ")}</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };


// import React, { useEffect, useState } from "react";
// import { readAll, remove } from "./API";

// export default function Read() {
//   const [employees, setEmployees] = useState([]);

//   const fetchEmployees = async () => {
//     try {
//       const data = await readAll();
//       setEmployees(data);
//     } catch (error) {
//       console.error("Error fetching employees:", error);
//     }
//   };

//   useEffect(() => {
//     fetchEmployees();
//   }, []);

//   const handleDelete = async (id) => {
//     if (window.confirm("Are you sure you want to delete?")) {
//       try {
//         await remove(id);
//         fetchEmployees(); // refresh list after delete
//       } catch (error) {
//         console.error("Error deleting employee:", error);
//       }
//     }
//   };

//   return (
//     <div className="container mt-4">
//       <h2>All Employees</h2>
//       <ul>
//         {employees.map((emp) => (
//           <li key={emp.id}>
//             {emp.name} - {emp.salary} - {emp.location} -{" "}
//             {emp.skills?.join(", ")}
//             <button
//               onClick={() => handleDelete(emp.id)}
//               style={{ marginLeft: "10px" }}
//             >
//               Delete
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

import React from "react";

export default function Read({ who }) {
  if (!who) {
    return (
      <div className="container mt-5 text-center">
        <h4 className="text-muted">⚠️ No employee selected</h4>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-lg-6 col-md-8 col-sm-12">
          <div className="card shadow-lg border-0 rounded-4">
            <div
              className="card-header text-white text-center rounded-top-4"
              style={{ background: "linear-gradient(135deg, #0d6efd, #20c997)" }}
            >
              <h3 className="mb-0 fw-bold">
                <i className="bi bi-person-badge-fill me-2"></i> Employee Details
              </h3>
            </div>

            <div className="card-body p-4">
              <div className="mb-3">
                <h5 className="fw-semibold">
                  <i className="bi bi-person-fill me-2 text-primary"></i>
                  {who.name}
                </h5>
              </div>

              <div className="mb-3">
                <p className="mb-1 fw-semibold text-secondary">Location</p>
                <p className="fs-6">{who.location}</p>
              </div>

              <div className="mb-3">
                <p className="mb-1 fw-semibold text-secondary">Commercials</p>
                <p className="fs-6">₹ {who.salary} / day</p>
              </div>

              <div className="mb-3">
                <p className="mb-1 fw-semibold text-secondary">Skills</p>
                <div className="d-flex flex-wrap gap-2">
                  {who.skills && who.skills.length > 0 ? (
                    who.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="badge rounded-pill text-white px-3 py-2 shadow-sm"
                        style={{ background: "linear-gradient(135deg, #0d6efd, #20c997)" }}
                      >
                        {skill}
                      </span>
                    ))
                  ) : (
                    <span className="text-muted">No skills listed</span>
                  )}
                </div>
              </div>
            </div>

            <div className="card-footer text-center bg-light rounded-bottom-4">
              <small className="text-muted">
                <i className="bi bi-info-circle me-2"></i>
                Employee Profile Overview
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
