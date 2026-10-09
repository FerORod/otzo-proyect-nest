import { ApiProperty } from '@nestjs/swagger';
import { Employee } from 'src/employees/entities/employee.entity';
import { Manager } from 'src/managers/entities/manager.entity';
import { Region } from 'src/regions/entities/region.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, ManyToOne, OneToMany } from 'typeorm';

@Entity()
export class Location {
    @PrimaryGeneratedColumn('increment')
        locationId?: number;

    @ApiProperty({default: 'otzo juriquilla'})
    @Column('text')
        locationName?: string

    @ApiProperty({default: 'Calle 123, Juriquilla, Querétaro'})
    @Column('text')
        locationAddress?: string

    @ApiProperty({default: [20.123456, -100.123456]})
    @Column('simple-array')
        locationLatLng?: number[]

    @OneToOne(() => Manager)
    @JoinColumn({ name: 'managerId' })
        manager?: Manager;

    @ManyToOne(() => Region, (region) => region.locations)
    @JoinColumn({ name: 'regionId' })
        region?: Region;

    @OneToMany(() => Employee, (employee) => employee.location)
        employees?: Employee[];
}
