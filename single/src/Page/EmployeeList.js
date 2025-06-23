            import React, { useEffect, useState } from 'react';
            
            // import DeleteIcon from "@material-ui/icons/Delete";
            // import Home from "@material-ui/icons/Home";
            // import Person from "@material-ui/icons/Person";   


            export default function EmployeeList() {
            const [users, setUsers] = useState([]);
            const [loading, setLoading] = useState(true);

                useEffect(() => {
                    // Web service API call
                    fetch('https://jsonplaceholder.typicode.com/posts') // Sample public API
                    .then((response) => response.json())      
                    .then((data) => {

                        console.log(data);

                        setUsers(data);
                        setLoading(false);
                    })
                    .catch((error) => {
                        console.error('Error fetching users:', error);
                        setLoading(false);
                    });
                }, []);

            if (loading) {
                return <div>Loading users...</div>;
            }

            return (
                    <div>
                        {users.map((item, index) => (
                        <div key="{index}" className="row mb-3 p-3 border rounded align-items-center">
                            <div className="col-md-1 fw-bold">{item.id}</div>
                            <div className="col-md-4"><strong>Title:</strong> {item.title}</div>
                            <div className="col-md-5"><strong>Body:</strong> {item.body}</div>
                            <div className="col-md-1 text-end">
                                <button className="btn btn-seccess " type="button"><i className="fa fa-edit font-size:36px"  ></i></button>
                            </div>
                            <div className="col-md-1 text-start">
                                <button type="button" className="btn btn-secondary"><i className="bi bi-trash"></i></button>
                            </div>
                        </div>
                        ))}
                    </div>
            );
            }