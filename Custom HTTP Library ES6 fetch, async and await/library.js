class EasyHTTP {
    // HTTP Get Request
    async get(url){
        const response = await fetch(url)
        const data = response.json()
        return data;
    };

    // HTTP Post Request
    async post(url, data){
            const response = await fetch(url, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(data)
            })
           
            const resData = response.json()
            return resData;
    }

      // HTTP Put Request
      async put(url, data){
            const response = await fetch(url, {
                method: 'PUT',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(data)
            })
              const update = await response.json()
              return update;
    
    }

    // HTTP Delete Request
    // delete(url){
    //     return new Promise((resolve, reject) => {
    //         fetch(url, {
    //             method: 'Delete',
    //             headers: {'Content-Type': 'application/json'},
    //         })
    //             .then(response => response.json())
    //             .then(() => resolve ('Resource Deleted'))
    //             .catch(error => reject (error))
    //     }) 
    // }

    async delete(url){
        const response = await fetch(url)
        const del = ('Deleted Successfully')
        return del;
    }
}