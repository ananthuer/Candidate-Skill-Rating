import { Table, Column, Model, DataType, IsIn } from 'sequelize-typescript';

export enum UserRole {
  CANDIDATE = 'candidate',
  REVIEWER = 'reviewer',
}


@Table
export class User extends Model{
    @Column({type: DataType.STRING })
    Name:string;
    
    @IsIn([Object.values(UserRole)])
    @Column({
      type: DataType.STRING,
    })
    Role: UserRole;

  @Column({type: DataType.STRING })
  Email: string;

  @Column({type: DataType.STRING })
  Password: string;
}
