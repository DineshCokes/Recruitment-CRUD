// import React, { useEffect, useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap-icons/font/bootstrap-icons.css";
// import { fetchExact, list, wash } from "./API";
// import { Recruite } from "./NewResource";
// import { Read } from "./Read";
// import { Update } from "./Update";

// export const Home = () => {
//   const [tmpArray, setTmpArray] = useState([]);
//   const [createView, setCreateView] = useState(false);
//   const [readView, setReadView] = useState(false);
//   const [updateView, setUpdateView] = useState(false);
//   const [pos, setPos] = useState(0);
//   const [obj, setObj] = useState({});

//   useEffect(() => {
//     setTmpArray(list());
//   }, []);

//   return (
//     <div className="container mt-5">
//       {createView ? (
//         <>
//           <Recruite />
//           <button
//             className="btn btn-outline-secondary mt-3"
//             onClick={() => setCreateView(false)}
//           >
//             <i className="bi bi-skip-backward-btn-fill"></i> Back
//           </button>
//         </>
//       ) : updateView ? (
//         <>
//           <Update who={pos} mention={obj} />
//           <button
//             className="btn btn-outline-secondary mt-3"
//             onClick={() => setUpdateView(false)}
//           >
//             <i className="bi bi-skip-backward-btn-fill"></i> Back
//           </button>
//         </>
//       ) : readView ? (
//         <>
//           <Read who={pos} />
//           <button
//             className="btn btn-outline-secondary mt-3"
//             onClick={() => setReadView(false)}
//           >
//             <i className="bi bi-skip-backward-btn-fill"></i> Back
//           </button>
//         </>
//       ) : (
//         <>
//           <button
//             className="btn btn-outline-success mb-3"
//             onClick={() => setCreateView(true)}
//           >
//             <i className="bi bi-person-plus-fill"></i> New
//           </button>
//           <div className="row justify-content-center">
//             <div className="table-responsive-md">
//               <table className="col-lg-8 col-md-10 col-sm-12 table table-striped p-3 shadow rounded">
//                 <thead>
//                   <tr>
//                     <th>Employee Name</th>
//                     <th>Location</th>
//                     <th>Commercials</th>
//                     <th>Skills</th>
//                     <th colSpan="2">Actions</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {tmpArray.map((ele, index) => (
//                     <tr key={index}>
//                       <td>
//                         <button
//                           className="btn btn-outline-primary me-2"
//                           onClick={() => {
//                             setReadView(true);
//                             setPos(index);
//                           }}
//                         >
//                           <i className="bi bi-book-half"></i>
//                         </button>
//                         {ele.resName}
//                       </td>
//                       <td>{ele.resArea}</td>
//                       <td>{ele.resPay}</td>
//                       <td>{ele.resSkills.join(", ")}</td>
//                       <td>
//                         <button
//                           className="btn btn-outline-warning rounded-circle"
//                           onClick={() => {
//                             setUpdateView(true);
//                             setPos(index);
//                             setObj(fetchExact(ele.resName));
//                           }}
//                         >
//                           <i className="bi bi-pencil-fill"></i>
//                         </button>
//                       </td>
//                       <td>
//                         <button
//                           className="btn btn-outline-danger rounded-circle"
//                           onClick={() => {
//                             setTmpArray(wash(index));
//                           }}
//                         >
//                           <i className="bi bi-trash-fill"></i>
//                         </button>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap-icons/font/bootstrap-icons.css";
// import NewResource  from "./NewResource";
// import Read from "./Read";
// import Update from "./Update";

// export const Home = () => {
//   const [employees, setEmployees] = useState([]);
//   const [createView, setCreateView] = useState(false);
//   const [readView, setReadView] = useState(false);
//   const [updateView, setUpdateView] = useState(false);
//   const [pos, setPos] = useState(0);
//   const [obj, setObj] = useState({});

//   useEffect(() => {
//     loadEmployees();
//   }, []);

//   const loadEmployees = async () => {
//     const res = await axios.get("http://localhost:8080/api/employees");
//     setEmployees(res.data);
//   };

//   const deleteEmployee = async (id) => {
//     await axios.delete(`http://localhost:8080/api/employees/${id}`);
//     loadEmployees();
//   };

//   return (
//     <div className="container mt-5">
//       {createView ? (
//         <>
//           <NewResource reload={loadEmployees} />
//           <button
//             className="btn btn-outline-secondary mt-3"
//             onClick={() => setCreateView(false)}
//           >
//             <i className="bi bi-skip-backward-btn-fill"></i> Back
//           </button>
//         </>
//       ) : updateView ? (
//         <>
//           <Update who={pos} mention={obj} reload={loadEmployees} />
//           <button
//             className="btn btn-outline-secondary mt-3"
//             onClick={() => setUpdateView(false)}
//           >
//             <i className="bi bi-skip-backward-btn-fill"></i> Back
//           </button>
//         </>
//       ) : readView ? (
//         <>
//           <Read who={pos} />
//           <button
//             className="btn btn-outline-secondary mt-3"
//             onClick={() => setReadView(false)}
//           >
//             <i className="bi bi-skip-backward-btn-fill"></i> Back
//           </button>
//         </>
//       ) : (
//         <>
//           <button
//             className="btn btn-outline-success mb-3"
//             onClick={() => setCreateView(true)}
//           >
//             <i className="bi bi-person-plus-fill"></i> New
//           </button>
//           <div className="row justify-content-center">
//             <div className="table-responsive-md">
//               <table className="col-lg-8 col-md-10 col-sm-12 table table-striped p-3 shadow rounded">
//                 <thead>
//                   <tr>
//                     <th>Employee Name</th>
//                     <th>Location</th>
//                     <th>Commercials</th>
//                     <th>Skills</th>
//                     <th colSpan="2">Actions</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {employees.map((ele) => (
//                     <tr key={ele.id}>
//                       <td>{ele.name}</td>
//                       <td>{ele.location}</td>
//                       <td>{ele.salary}</td>
//                       <td>{ele.skills.join(", ")}</td>
//                       <td>
//                         <button
//                           className="btn btn-outline-warning rounded-circle"
//                           onClick={() => {
//                             setUpdateView(true);
//                             setObj(ele);
//                           }}
//                         >
//                           <i className="bi bi-pencil-fill"></i>
//                         </button>
//                       </td>
//                       <td>
//                         <button
//                           className="btn btn-outline-danger rounded-circle"
//                           onClick={() => deleteEmployee(ele.id)}
//                         >
//                           <i className="bi bi-trash-fill"></i>
//                         </button>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap-icons/font/bootstrap-icons.css";
// import NewResource from "./NewResource";
// import Read from "./Read";
// import Update from "./Update";

// export const Home = () => {
//   const [employees, setEmployees] = useState([]);
//   const [createView, setCreateView] = useState(false);
//   const [readView, setReadView] = useState(false);
//   const [updateView, setUpdateView] = useState(false);
//   const [obj, setObj] = useState({});

//   useEffect(() => {
//     loadEmployees();
//   }, []);

//   const loadEmployees = async () => {
//     const res = await axios.get("http://localhost:8080/api/employees");
//     setEmployees(res.data);
//   };

//   const deleteEmployee = async (id) => {
//     await axios.delete(`http://localhost:8080/api/employees/${id}`);
//     loadEmployees();
//   };

//   return (
//     <div className="container mt-5">
//       {createView ? (
//         <>
//           <NewResource reload={loadEmployees} />
//           <button
//             className="btn btn-outline-secondary mt-3"
//             onClick={() => setCreateView(false)}
//           >
//             <i className="bi bi-skip-backward-btn-fill"></i> Back
//           </button>
//         </>
//       ) : updateView ? (
//         <>
//           <Update mention={obj} reload={loadEmployees} />
//           <button
//             className="btn btn-outline-secondary mt-3"
//             onClick={() => setUpdateView(false)}
//           >
//             <i className="bi bi-skip-backward-btn-fill"></i> Back
//           </button>
//         </>
//       ) : readView ? (
//         <>
//           <Read who={obj} />
//           <button
//             className="btn btn-outline-secondary mt-3"
//             onClick={() => setReadView(false)}
//           >
//             <i className="bi bi-skip-backward-btn-fill"></i> Back
//           </button>
//         </>
//       ) : (
//         <>
//           <button
//             className="btn btn-outline-success mb-3"
//             onClick={() => setCreateView(true)}
//           >
//             <i className="bi bi-person-plus-fill"></i> New
//           </button>
//           <div className="row justify-content-center">
//             <div className="table-responsive-md">
//               <table className="col-lg-10 col-md-12 col-sm-12 table table-striped p-3 shadow rounded">
//                 <thead className="table-dark">
//                   <tr>
//                     <th>Employee Name</th>
//                     <th>Location</th>
//                     <th>Commercials</th>
//                     <th>Skills</th>
//                     <th colSpan="3" className="text-center">Actions</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {employees.map((ele) => (
//                     <tr key={ele.id}>
//                       <td>{ele.name}</td>
//                       <td>{ele.location}</td>
//                       <td>{ele.salary}</td>
//                       <td>{ele.skills.join(", ")}</td>
//                       <td className="text-center">
//                         <button
//                           className="btn btn-outline-info rounded-circle"
//                           onClick={() => {
//                             setReadView(true);
//                             setObj(ele);
//                           }}
//                         >
//                           <i className="bi bi-eye-fill"></i>
//                         </button>
//                       </td>
//                       <td className="text-center">
//                         <button
//                           className="btn btn-outline-warning rounded-circle"
//                           onClick={() => {
//                             setUpdateView(true);
//                             setObj(ele);
//                           }}
//                         >
//                           <i className="bi bi-pencil-fill"></i>
//                         </button>
//                       </td>
//                       <td className="text-center">
//                         <button
//                           className="btn btn-outline-danger rounded-circle"
//                           onClick={() => deleteEmployee(ele.id)}
//                         >
//                           <i className="bi bi-trash-fill"></i>
//                         </button>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import NewResource from "./NewResource";
import Read from "./Read";
import Update from "./Update";

export const Home = () => {
  const [employees, setEmployees] = useState([]);
  const [createView, setCreateView] = useState(false);
  const [readView, setReadView] = useState(false);
  const [updateView, setUpdateView] = useState(false);
  const [obj, setObj] = useState({});

  useEffect(() => {
    loadEmployees();
  }, []);

  const loadEmployees = async () => {
    const res = await axios.get("http://localhost:8080/api/employees");
    setEmployees(res.data);
  };

  const deleteEmployee = async (id) => {
    if (window.confirm("Are you sure you want to delete this employee?")) {
      await axios.delete(`http://localhost:8080/api/employees/${id}`);
      loadEmployees();
    }
  };

  return (
    <div className="container mt-5">
      {createView ? (
        <>
          <NewResource reload={loadEmployees} />
          <button
            className="btn btn-outline-secondary mt-3"
            onClick={() => setCreateView(false)}
          >
            <i className="bi bi-arrow-left-circle"></i> Back
          </button>
        </>
      ) : updateView ? (
        <>
          <Update mention={obj} reload={loadEmployees} />
          <button
            className="btn btn-outline-secondary mt-3"
            onClick={() => setUpdateView(false)}
          >
            <i className="bi bi-arrow-left-circle"></i> Back
          </button>
        </>
      ) : readView ? (
        <>
          <Read who={obj} />
          <button
            className="btn btn-outline-secondary mt-3"
            onClick={() => setReadView(false)}
          >
            <i className="bi bi-arrow-left-circle"></i> Back
          </button>
        </>
      ) : (
        <>
          {/* Header with Title + New Button */}
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h2 className="text-primary fw-bold">
              <i className="bi bi-people-fill"></i> Employee Directory
            </h2>
            <button
              className="btn btn-success"
              onClick={() => setCreateView(true)}
            >
              <i className="bi bi-person-plus-fill"></i> New Employee
            </button>
          </div>

          {/* Employee Table */}
          <div className="card shadow-lg border-0">
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-hover table-striped table-bordered align-middle">
                  <thead className="table-dark text-center">
                    <tr>
                      <th>Name</th>
                      <th>Location</th>
                      <th>Salary</th>
                      <th>Skills</th>
                      <th colSpan="3">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {employees.map((ele) => (
                      <tr key={ele.id}>
                        <td className="fw-semibold">{ele.name}</td>
                        <td>{ele.location}</td>
                        <td>₹ {ele.salary}</td>
                        <td>
                          {ele.skills.map((skill, i) => (
                            <span
                              key={i}
                              className="badge bg-info text-dark me-1"
                            >
                              {skill}
                            </span>
                          ))}
                        </td>
                        <td className="text-center">
                          <button
                            className="btn btn-outline-info btn-sm"
                            onClick={() => {
                              setReadView(true);
                              setObj(ele);
                            }}
                          >
                            <i className="bi bi-eye-fill"></i>
                          </button>
                        </td>
                        <td className="text-center">
                          <button
                            className="btn btn-outline-warning btn-sm"
                            onClick={() => {
                              setUpdateView(true);
                              setObj(ele);
                            }}
                          >
                            <i className="bi bi-pencil-fill"></i>
                          </button>
                        </td>
                        <td className="text-center">
                          <button
                            className="btn btn-outline-danger btn-sm"
                            onClick={() => deleteEmployee(ele.id)}
                          >
                            <i className="bi bi-trash-fill"></i>
                          </button>
                        </td>
                      </tr>
                    ))}
                    {employees.length === 0 && (
                      <tr>
                        <td colSpan="7" className="text-center text-muted">
                          <i className="bi bi-inbox"></i> No employees found
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
