import axios from "axios"

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: '173145d35e21462fa976feb72bc3d2f2'
    }
})