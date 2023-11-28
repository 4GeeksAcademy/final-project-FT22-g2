const createUserUrlAPI = "https://didactic-happiness-7qx694qjp792xjqj-3001.app.github.dev/admin/user/new/?url=/admin/user/";
const getUserUrlAPI = "https://didactic-happiness-7qx694qjp792xjqj-3001.app.github.dev/admin/user/"

export const createUser = (username) => {
    return fetch(createUserUrlAPI + username, {
        method: "POST",
        body: JSON.stringify([]),
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then((response) => {
            if (!response.ok) throw Error(response.statusText);
            return response.json();
        });
};

export const getUserTasks = (username) => {
    return fetch(urlAPI + username)
      .then((response) => {
        if (!response.ok) throw Error(response.statusText);
        return response.json();
      });
  };