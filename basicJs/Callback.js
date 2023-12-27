const greetUser = (username, callback) => {
    console.log(callback(username));
};

const cb = username => "Hello " + username;

greetUser("vaishnav", cb);
