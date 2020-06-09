import "reflect-metadata";
import {
  Entity,
  Column,
  ObjectID,
  ObjectIdColumn,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity()
export class Site {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  subject: string;

  @Column("simple-array")
  altnames: string[];

  @Column()
  renewAt: number;

  @Column()
  deletedAt: number;
}
