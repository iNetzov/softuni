const BASE_URL = 'http://localhost:3030/jsonstore/users'
export default {
    async getAll() {
        const response = await fetch(BASE_URL);
        const result = await response.json();
        const users = Object.values(result);

        return users;
    },
    async createUser(userData) {
        const response = await fetch(BASE_URL, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData),
        });
        const result = await response.json();
        return result;
    }


}