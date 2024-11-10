
import bcrypt from 'bcrypt';
const saltRounds = 10;

export const saltAndHashPassword = async (plaintextPassword: string) => {
  const encryptedPassword = await bcrypt.hash(plaintextPassword, saltRounds);
  return encryptedPassword;
}
