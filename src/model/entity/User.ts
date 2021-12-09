import {Maximum, MaxLength, Minimum, Property, Required} from "@tsed/schema";
import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    @Property()
    id: number;

    @Column()
    @MaxLength(100)
    @Required()
    name: string;
}