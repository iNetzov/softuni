const BASE_URL = 'http://localhost:3030/jsonstore/users'
export default {
    async getAll() {
        const response = await fetch(BASE_URL);
        const result = await response.json();
        const users = Object.values(result);

        return users;
    },
    async createUser(userData) {
        const {country,city,street,streetNumber,...postData} =  userData;

        postData.address = {country,city,street,streetNumber}
        postData.createdAt = new Date().toISOString();
        postData.updatedAt = new Date().toISOString();
       

        const response = await fetch(BASE_URL, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(postData),
        });
        const result = await response.json();
        return result;
    },
    async getGivenUser(userId) {
        const response = await fetch(`${BASE_URL}/${userId}`);
        const user = await response.json();
        return user;

    }


}