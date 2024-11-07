import { Field, ObjectType, Int } from '@nestjs/graphql';

@ObjectType()
export class Student {
  @Field(type => Int)
  id: number;

  @Field()
  name: string;

  @Field(type => Int)
  age: number;

  @Field()
  department: string;
}
