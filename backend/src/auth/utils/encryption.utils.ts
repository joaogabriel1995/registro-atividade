import { Injectable } from '@nestjs/common';
import { hash, genSalt, compare } from 'bcrypt';

@Injectable()
export class EncryptionUtil {
  private static readonly saltRounds = 10;

  static async encryptionPassword(password: string): Promise<string> {
    const salt = await genSalt(this.saltRounds);
    return hash(password, salt);
  }
  static async comparePassword(
    password: string,
    hash: string,
  ): Promise<boolean> {
    return compare(password, hash);
  }
}
