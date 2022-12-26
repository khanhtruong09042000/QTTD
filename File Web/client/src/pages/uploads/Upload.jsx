import React, { useState } from 'react';
import './upload.css'
import axios from 'axios'
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom";

const Upload = () => {
    const [file, setFile] = useState(null);

    const postFile = async (e) => {
        e.preventDefault();
        if (file) {
            const data = new FormData();
            const filename = Date.now() + file.name;
            data.append("name", filename);
            data.append("file", file);
            try {
                const res = await axios.post('http://localhost:5000/upload', data)
                console.log(res.data)
                toast.success("Tải thành công", {
                    position: "top-center"
                });
            } catch (error) {
                toast.error("Lỗi không tải được", {
                    position: "top-center"
                });
            }

        }
    }

    return (
        <div className="box2">
            <form onSubmit={postFile} className='form1'>
                <div className="file-upload1">
                    <p>Lựa chọn tài liệu để tải:</p>
                </div>
                <div className="file-choose1">
                    <input type="file" className="file1" id="file-input1" onChange={(e) => setFile(e.target.files[0])} />
                    <input type="submit" className="button-submit1" value="Upload file" />
                </div>
            </form>

            <div className="chuyen">
                <Link to={`/files/`} className="link">
                    <button className='button-submit2'>Xem danh sách upload =={'>'}</button>
                </Link>
            </div>

            <ToastContainer />
        </div>
    )
};

export default Upload;
