import React, { useState } from 'react'
import Navbar from './Navbar'

const ViewallStudent = () => {
    const [data, changeData] = useState(
        [{
            "name": "Dhiya",
            "admNo": "12445",
            "college": "FISAT",
            "dob": "15-04-2002",
            "email": "dhiya@gmail.com",
        }
        ]
    )
    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Name</th>
                                            <th scope="col">Admno</th>
                                            <th scope="col">College</th>
                                            <th scope="col">DOB</th>
                                            <th scope="col">Email</th>
                                           
                                        </tr>
                                    </thead>
                                    <tbody>
                                       {data.map(
                                        (value,index)=>{
                                            return  <tr>
                                            <th scope="row">{value.name}</th>
                                            <td>{value.admNo}</td>
                                            <td>{value.college}</td>
                                            <td>{value.dob}</td>
                                            <td>{value.email}</td>
                                        </tr>
                                        }
                                       )}
                                        
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewallStudent