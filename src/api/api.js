import * as axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers:     {
        "API-KEY": "26cf420d-337f-4153-a8ca-1d9eec0554df"
    }
});


export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            });
    },
    follow(userId) {
        return instance.post(`follow/${userId}`, {}, {
            withCredentials: true,
            headers: {
                "API-KEY":"2b982a6c-b849-4fe1-86ea-929147699205"
            }
        })

    },
    unfollow(userId) {
       return instance.delete(`follow/${userId}`, {
            withCredentials: true,
            headers: {
                "API-KEY":"2b982a6c-b849-4fe1-86ea-929147699205"
            }})
    },
    getProfile(userId) {
        console.warn('Obsolete method. Please use profileAPI object.');
        return profileAPI.getProfile(userId);
    }

}

export const profileAPI = {

    getProfile(userId) {
        return instance.get(`profile/` + userId);
    },
    getStatus(userId) {
        return instance.get(`profile/status/` + userId);
    },
    updateStatus(status) {
        return instance.put(`profile/status/`,{status: status})
    }

}

export const authAPI = {
    me(){return instance.get(`auth/me`)}
}


