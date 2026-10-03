import { Manager } from 'src/managers/entities/manager.entity';
import { Region } from 'src/regions/entities/region.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, ManyToOne } from 'typeorm';

@Entity()
export class Location {
    @PrimaryGeneratedColumn('increment')
        locationId?: number;
    @Column('text')
        locationName?: string
    @Column('text')
        locationAddress?: string
    @Column('simple-array')
        locationLatLng?: number[]

    @OneToOne(() => Manager)
    @JoinColumn({ name: 'managerId' })
        manager?: Manager;

    @ManyToOne(() => Region, (region) => region.locations)
    @JoinColumn({ name: 'regionId' })
        region?: Region;
}
