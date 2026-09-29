import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { OneToMany } from "typeorm";
import { Product } from "../../products/entities/product.entity";

@Entity()
export class Provider {
    @PrimaryGeneratedColumn('uuid')
        providerId?: string;
    @Column('text')
        providerName?: string;
    @Column('text', {
        unique: true
    })
        providerEmail?: string;
    @Column('text')
        providerPhoneNumber?: string;
    @OneToMany(() => Product, (product) => product.provider)
    products?: Product[];
}
