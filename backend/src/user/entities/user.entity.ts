import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';
@Entity({ name: 'users' })
export class UserEntity {
  @PrimaryColumn({ name: 'id' })
  public id: string;

  @Column({ name: 'name', nullable: false })
  public name: string;

  @Column({ name: 'email', nullable: false, unique: true })
  public email: string;

  @Column({ name: 'cpf', nullable: false })
  public cpf: string;

  @Column({ name: 'username', nullable: false })
  public username: string;

  @Column({ name: 'password', nullable: false })
  public password: string;

  @Column({ name: 'hourly_rate', nullable: false })
  public hourlyRate: number;

  @Column({ name: 'created_at', nullable: false })
  public createdAt: Date;

  @Column({ name: 'updated_at', nullable: true })
  public updatedAt: Date;
  constructor(
    props: Omit<UserEntity, 'id' | 'createdAt' | 'updatedAt'>,
    id?: string,
  ) {
    Object.assign(this, props);
    this.validate(id);
  }
  private validate(id: string) {
    if (!id) {
      this.id = uuidv4();
      this.createdAt = new Date();
    }
  }
}
