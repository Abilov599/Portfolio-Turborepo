import { compare, hash } from 'bcrypt';

async function hashPassword(password: string, salt = 10) {
  try {
    const hashedPassword = await hash(password, salt);
    return hashedPassword;
  } catch (error) {
    throw new Error(error);
  }
}

async function comparePassword(payload: string, password: string) {
  try {
    const isPasswordValid = await compare(payload, password);
    return isPasswordValid;
  } catch (error) {
    throw new Error(error);
  }
}

export { hashPassword, comparePassword };
