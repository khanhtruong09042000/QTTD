import React, { useEffect, useState } from 'react';
import './download.css'
import axios from 'axios'
import { Link } from "react-router-dom";

const Download = () => {

    const [files, setFiles] = useState([])


    useEffect(() => {
        const checkFile = async () => {
            const res = await axios.get('http://localhost:5000/files')
            setFiles(res.data)
        }
        checkFile()
    }, [])



    return (
        <div className="download">
            <form >
                <div className="file-upload1">
                    <p>Danh sách tài liệu được upload:</p>
                </div>
                <div className="file-choose1">
                    {
                        files.map((items) => (
                            <ul className="file-list1">
                                <Link to={`/files/${items.name}`} className="link">
                                    <li><span><hr /></span> {items.name} <span><hr /></span></li>
                                </Link>
                            </ul>
                        ))}
                </div>
            </form>
            {/* <Link to={`/`} className="link">
    <button className='button-submit3'>{'<'}== Quay lại phần Upload file</button>
     </Link> */}
        </div>
    )
};

export default Download;
