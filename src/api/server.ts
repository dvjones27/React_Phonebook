// const token = flask token
// if using flask token enter above and modify links below

export const server_calls = {
    get: async () => {
        const response = await fetch(`https://6442c48cb69b260076ed08dd--neon-piroshki-d3dbbf.netlify.app/api/contacts`,
        // change url to my glitch url once set up
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            },
        });

        if (!response.ok){
            throw new Error('Failed to fetch data from the server')
        }

        return await response.json()
    },

    create: async (data: any = {}) => {
        const response = await fetch(`https://6442c48cb69b260076ed08dd--neon-piroshki-d3dbbf.netlify.app/api/contacts`,
        {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'access-control-allow-origin':	'*',
            },
            body: JSON.stringify(data)
        })

        if (!response.ok) {
            throw new Error('Failed to create new data on the server')
        }

        return await response.json()
    },

    update: async (id:string, data: any = {}) => {
        const response = await fetch(`https://6442c48cb69b260076ed08dd--neon-piroshki-d3dbbf.netlify.app/api/contacts/${id}`,
        {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            },
            body: JSON.stringify(data)
        })

        if (!response.ok){
            throw new Error('Failed to update data on server')
        }

        return await response.json()
    },

    delete: async (id:string) => {
        const response = await fetch(`https://6442c48cb69b260076ed08dd--neon-piroshki-d3dbbf.netlify.app/api/contacts/${id}`,
        {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
            }
        })

        if (!response.ok){
            throw new Error('Failed to delete data on server')
        }

        return;
    },
}

