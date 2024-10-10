function submitData(name, email) {
    const url = 'http://localhost:3000/users';
    
    const body = {
        name: name,
        email: email
    };
    
    const configurationObject = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(body)
    };

    
    return fetch(url, configurationObject)
    .then(response => {
        return response.json();  
    })
    .then(data => {
        const bodyElement = document.querySelector('body');
        const idElement = document.createElement('p');
        idElement.innerHTML = data.id;  
        bodyElement.append(idElement);
    })
    .catch(function(error) {
        const bodyElement = document.querySelector('body');
        const errorElement = document.createElement('p');
        errorElement.innerHTML = 'Unauthorized Access'; 
        bodyElement.append(errorElement)

    });
}
