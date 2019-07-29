import axios from 'axios';

const axiosWithAuth = () => {
    const token = localStorage.getItem("token");

    return axios.create({
        headers: {
            "Content-Type": "application.json",
            Authization: `${token}`
        },
        baseURL: "http://localhost:5000/api"
    })
}

export default axiosWithAuth;