import { MigrationInterface, QueryRunner } from 'typeorm';

export class UserTable1716342679544 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        CREATE TABLE users (
            id uuid NOT NULL,
            name varchar(256) NOT NULL,
            cpf varchar(256) NOT NULL,
            username varchar(256) NOT NULL,
            password varchar(256) NOT NULL,
            email varchar(256) UNIQUE NOT NULL,
            created_at timestamp NOT NULL,
            updated_at timestamp, 
            CONSTRAINT user_pk PRIMARY KEY (id)
        );
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE IF EXISTS users;`);
  }
}
