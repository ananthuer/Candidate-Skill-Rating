import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as bcrypt from 'bcrypt';
import { User } from './entities/user.entity';
import { UserRole } from 'src/constant';
@Injectable()
export class UserService {
  async create(createUserDto: CreateUserDto) {
    const hashedPassword = await bcrypt.hash(createUserDto.Password, 10);

    if (createUserDto.Roles == 1) {
      const user = await User.create({
        Name: createUserDto.Name,
        Role: UserRole.CANDIDATE,
        Email: createUserDto.Email,
        Password: hashedPassword
      });

      return user
    } else if (createUserDto.Roles == 2) {
      const user = await User.create({
        Name: createUserDto.Name,
        Role: UserRole.REVIEWER,
        Email: createUserDto.Email,
        Password: hashedPassword
      });

      return user
    }

  }

  async findAll() {
    return await User.findAll()
  }

  async findOne(id: number) {
    return await User.findByPk(id)
  }

  async update(id: number, updateUserDto: CreateUserDto) {

    const hashedPassword = await bcrypt.hash(updateUserDto.Password, 10);
    if (updateUserDto.Roles == 1) {
      const user = await User.update({
        Name: updateUserDto.Name,
        Role: UserRole.CANDIDATE,
        Email: updateUserDto.Email,
        Password: hashedPassword
      }, {
        where: {
          id: id
        }
      });

      return user
    } else if (updateUserDto.Roles == 2) {
      const user = await User.update({
        Name: updateUserDto.Name,
        Role: UserRole.REVIEWER,
        Email: updateUserDto.Email,
        Password: hashedPassword
      }, {
        where: {
          id: id
        }
      });

      return user
    }
  }

  async remove(id: number) {
    return await User.destroy({
      where: {
        id: id
      }
    })
  }

  async findOneByEmail(Email: string) {
    return await User.findOne({
      where:{
        Email:Email
      }
    })
  }
}
