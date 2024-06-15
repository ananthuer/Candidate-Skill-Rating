import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { QuestionService } from './question.service';
import { CreateQuestionDto } from './dto/create-question.dto';
import { UpdateQuestionDto } from './dto/update-question.dto';
import { RolesGuard } from 'src/gaurds/role.guard';
import { Roles } from 'src/gaurds/roles.decorator';
import { Role } from 'src/gaurds/role.enum';
import { ApiSecurity } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { JwtAuthGuards } from 'src/gaurds/jwt-auth.guard';


@Controller('question')
export class QuestionController {
  constructor(private readonly questionService: QuestionService) {}

  @Post()
  create(@Body() createQuestionDto: CreateQuestionDto) {
    return this.questionService.create(createQuestionDto);
  }

  @Get()
  @ApiSecurity('x-access-token')
  @UseGuards(JwtAuthGuards,RolesGuard)
  @Roles(Role.REVIEWER)
  findAll() {
    return this.questionService.findAll();
  }

  @Get(':id')
  @ApiSecurity('x-access-token')
  @UseGuards(JwtAuthGuards,RolesGuard)
  @Roles(Role.REVIEWER)
  findOne(@Param('id') id: string) {
    return this.questionService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateQuestionDto: UpdateQuestionDto) {
    return this.questionService.update(+id, updateQuestionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.questionService.remove(+id);
  }
}
