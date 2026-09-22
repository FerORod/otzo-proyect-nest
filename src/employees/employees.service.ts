import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Employee } from './entities/employee.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EmployeesService {

  constructor(
    @InjectRepository(Employee)
    private employeeRepository: Repository<Employee>
  ){}

  create(createEmployeeDto: CreateEmployeeDto) {
    return this.employeeRepository.save(createEmployeeDto)
  }

  findAll() {
    return this.employeeRepository.find()
  }

  findOne(id: string) {
    const employee = this.employeeRepository.findOneBy({id : id});
    if (!employee) throw new NotFoundException();
    return employee;
  }

  async update(id: string, updateEmployeeDto: UpdateEmployeeDto) {
    const employeeToUpdate = await this.employeeRepository.preload({
      id : id,
      ... updateEmployeeDto
    })
    if (!employeeToUpdate) throw new NotFoundException
    this.employeeRepository.save(employeeToUpdate)
    return employeeToUpdate
  }

  remove(id: string) {
    this.findOne(id)
    this.employeeRepository.delete({id : id})
    return {message: `El objeto con id ${id} fue eliminado`}
  }
}