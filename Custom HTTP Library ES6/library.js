class EasyHTTP {
    // HTTP Get Request
    get(url){
        return new Promise((resolve, reject) => {
            fetch(url)
                .then(response => response.json())
                .then(data => resolve (data))
                .catch(error => reject (error))
        }) 
    }

    // HTTP Post Request
    post(url, data){
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(data)
            })
                .then(response => response.json())
                .then(data => resolve (data))
                .catch(error => reject (error))
        }) 
    }

      // HTTP Put Request
      put(url, data){
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'PUT',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(data)
            })
                .then(response => response.json())
                .then(data => resolve (data))
                .catch(error => reject (error))
        }) 
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

    delete(url){
        return new Promise((resolve, reject) => {
            fetch(url)
                .then(response => response.json())
                .then(() => resolve ('Deleted Successfully'))
                .catch(error => reject (error))
        }) 
    }
}