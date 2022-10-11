// Account @Transform

// Register request transform
const UserRequestTransform = (userRequestData) => {
  return userRequestData;
};

const UserResponseTransform = ({ uid, email, name, age, weight, avatar }) => ({
  userId: uid,
  email,
  name,
  avatar,
  age: `${age ?? '-'} años`,
  weight: `${weight ?? '-'} kg`,
});

export { UserRequestTransform, UserResponseTransform };
