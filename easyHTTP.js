export default class EasyHTTP {
    static async get(url) {
        const response = await fetch(url)

        return await response.json()
    }

    static async post(url, data) {
        const response = 
            await fetch(url, {
                method: 'POST',
                headers: {'content-type': 'application/json'},
                body: JSON.stringify(data)
            })

        return await response.json();
    }
    
    static async put(url, data) {
        const response =
            await fetch(url, {
                method: 'PUT',
                headers: {'content-type': 'application/json'},
                body: JSON.stringify(data)
            });

        return await response.json();
    }

    static async delete(url) {
        const response =
            await fetch(url, {
                method: 'DELETE',
                headers: {'content-type': 'application/json'}
            })
        
        const resData = await response;

        return 'Deleted.'
    }
}