import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Post } from "../../post/domain/post.model";

@Entity()
export class User {
  constructor(
    email: string,
    name: string,
    password: string,
    isActive?: boolean
  ) {
    this.email = email;
    this.name = name;
    this.password = password;
    this.isActive = isActive ?? true;
  }

  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  email: string;

  @Column()
  name: string;

  @Column()
  password: string;

  @Column({ default: true })
  isActive!: boolean;

  @OneToMany(() => Post, (post) => post.user)
  post!: Post[];
}

export default User;
