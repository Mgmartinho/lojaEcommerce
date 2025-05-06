const API_BASE_URL = "http://localhost:8008";

export const api = {
    async get<T>(endpoint: string) : Promise<T>{
        const response = await fetch(`${API_BASE_URL}${endpoint}`, {
            method: "GET",
            headers: {
                "Content-type": "application/json"
            },
        });

        if(!response.ok){
            throw new Error(`Erro na Requisição: ${response.status}`)
        };

        return response.json() as Promise<T>;
    },

    async post<T>(endpoint: string, data: unknown) : Promise<T>{
        const response = await fetch(`${API_BASE_URL}${endpoint}`, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(data),
        });

        if(!response.ok){
            throw new Error(`Erro na Requisição: ${response.status}`)
        };
        return response.json() as Promise<T>;
    },


    async put<T>(endpoint: string, data: unknown) : Promise<T>{
        const response = await fetch(`${API_BASE_URL}${endpoint}`, {
            method: "PUT",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(data),
        });

        if(!response.ok){
            throw new Error(`Erro na Requisição: ${response.status}`)
        };
        return response.json() as Promise<T>;
    },


    async delete<T>(endpoint: string) : Promise<T>{
        const response = await fetch(`${API_BASE_URL}${endpoint}`, {
            method: "DELETE",
            headers: {
                "Content-type": "application/json"
            },
        });

        if(!response.ok){
            throw new Error(`Erro na Requisição: ${response.status}`)
        };
        return response.json() as Promise<T>;
    },

};