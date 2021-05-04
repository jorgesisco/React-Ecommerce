import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'jorgesisco17@gmail.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Sergio Perez',
    email: 'sergio@gmail.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Sarah',
    email: 'sarah@gmail.com',
    password: bcrypt.hashSync('123456', 10),
  },
];

export default Users;
