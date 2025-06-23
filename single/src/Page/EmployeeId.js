            import React, { useEffect, useState } from 'react';

            export default function EmployeeId() {

            const [employee, setEmployee] = useState();
            const [loading, setLoading] = useState(true);

                useEffect(() => {
                    // Web service API call
                    fetch('https://jsonplaceholder.typicode.com/todos/') // Sample public API
                    .then((response) => response.json())      
                    .then((data) => {
                        console.log(data);
                        setEmployee(data);
                        setLoading(false);
                    })
                    .catch((error) => {
                        console.error('Error fetching users:', error);
                        setLoading(false);
                    });
                }, );

            if (loading) {
                return <div>Loading users...</div>;
            }

            return (
                <>
              <div>
                    <div class="row fw-bold border-bottom pb-2">
                        <div class="col-2">ID</div>
                        <div class="col-6">Title</div>
                        <div class="col-4">Status</div>
                    </div>
                    <div class="row py-2 border-bottom">
                        <div class="col-2">{employee.id}</div>
                        <div class="col-6">{employee.title}</div>
                        <div class="col-4">{employee.completed='completed' ? 'true' : 'false'}</div>
                    </div>
                </div>
                </>
            );
            }