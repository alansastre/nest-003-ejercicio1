import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Restaurant {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({unique: true})
    title: string;

    @Column({nullable: true, length: 500})
    description: string;

    @Column({length: 9})
    phone: string;

    @Column({default: 1})
    priceLevel: number;

    @Column()
    address: string;

    @Column()
    city: string;

    @Column({nullable: true})
    webUrl: string;
}