const users = [
  {name: "Mango", active: true},
  {name: "Poly", active: false},
  {name: "Ajax", active: true},
  {name: "Lux", active: false}
];


const toggleUserState2 = (allUsers, userName) => {
  return new Promise((resolve, reject) => {
    const updatedUsers = allUsers.map(user =>
      user.name === userName ? {...user, active: !user.active} : user
    );

    resolve(updatedUsers);
  });
};

const logger2 = updatedUsers => console.table(updatedUsers);

toggleUserState2(users, "Mango").then(logger2);
toggleUserState2(users, "Lux").then(logger2);
