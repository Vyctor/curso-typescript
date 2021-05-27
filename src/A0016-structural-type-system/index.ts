type User = { username: string; password: string };

type VerifyUserFn = (user: User, receivedValue: User) => boolean;

const verifyUser: VerifyUserFn = (user, receivedValue) => {
  return user.password === receivedValue.password && user.username === receivedValue.username;
};

const dbUser: User = { username: 'joao', password: '123456' };
const receivedValue: User = { username: 'joao', password: '123456' };

const loggedIn = verifyUser(dbUser, receivedValue);
console.log(loggedIn);

export { verifyUser };
