const user = {
  username: "hannah",
  password: "remoteToday",
};

function loginUser({ username, password }) {
  return username === user.username && password === user.password
    ? username
    : `incorrect username/pw`;
}

module.exports = { loginUser };
