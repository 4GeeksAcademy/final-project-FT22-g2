const urlAPI = "https://didactic-happiness-7qx694qjp792xjqj-3001.app.github.dev/api/";

export const createUser = async (username, email, password) => {
    const user = {
        "username": username,
        "email": email,
        "password": password,
        "active": true
    };

    try {
        const response = await fetch(urlAPI + "users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user)
        });

        if (!response.ok) {
            // Throw an error if the response status is not OK
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // If the response is OK, return the response JSON
        return response.json();
    } catch (error) {
        // Handle any errors that occurred during the fetch
        console.error("Error during fetch:", error);
        throw error;
    }
}

export const deleteUser = async () => {
    try {
        const response = await fetch(urlAPI + "users", {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify()
        });

        if (!response.ok) {
            // Throw an error if the response status is not OK
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // If the response is OK, return the response JSON
        return response.json();
    } catch (error) {
        // Handle any errors that occurred during the fetch
        console.error("Error during fetch:", error);
        throw error;
    }
}

export const getCreatedUser = async () => {
    try {
        const response = await fetch(urlAPI + "login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify()
        });
        if (!response.ok) {
            // Throw an error if the response status is not OK
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        // If the response is OK, return the response JSON
        return response.json();
    } catch (error) {
        // Handle any errors that occurred during the fetch
        console.error("Error during fetch:", error);
        throw error;
    }
}
