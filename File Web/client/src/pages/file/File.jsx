import axios from "axios";
import { useLocation } from "react-router-dom";
import './file.css'
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
const File = () => {

    const location = useLocation()
    const path = location.pathname.split("/")[2]

    const dowload = async () => {

        try {
            await axios.get("http://localhost:5000/file/" + path)
            toast.success("Tải thành công", {
                position: "top-center"
            });
            window.location.replace("http://localhost:5000/file/" + path)
        } catch (error) {
            toast.error("Lỗi không tải được", {
                position: "top-center"
            });
        }
    }


    const Removes = async () => {

        try {
            await axios.delete('http://localhost:5000/files/' + path)
            toast.info("Xóa thành công", {
                position: "top-center"
            });
            window.location.replace("/files")
        } catch (error) {
            toast.error("Lỗi không xóa được", {
                position: "top-center"
            });
        }
    }


    return (
        <div className="file">
            <div className="box">
                <h1>Ấn <span className="span">Download</span> để xem chi tiết tài liệu:</h1>
                <div className="box1">
                    <button onClick={dowload} className="but2">Download</button>
                    <button onClick={Removes} className="but1">Delete</button>
                </div>
            </div>
            <ToastContainer />
        </div>
    )
};

export default File;
