import { Location } from "src/locations/entities/location.entity";
import { Column, Entity, PrimaryGeneratedColumn, OneToMany, JoinColumn } from "typeorm";

@Entity()
export class Region {
    @PrimaryGeneratedColumn('increment')
        regionId?: number
    @Column({
        type: 'text',
        unique: true
    })
        regionName?: string
    @Column('simple-array')
        regionStates?: string[]

    @OneToMany(() => Location, (location) => location.region)
        locations?: Location[];
}
