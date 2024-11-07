import { Query, Resolver } from '@nestjs/graphql';
import { Student } from './student.model';

@Resolver(of => Student)
export class StudentResolver {
  @Query(returns => [Student])
  getStudents(): Student[] {
    // Here, you would typically fetch data from your database
    return [
      { id: 1, name: 'Alice', age: 20, department: 'Computer Science' },
      { id: 2, name: 'Bob', age: 22, department: 'Economics' },
    ];
  }
}
