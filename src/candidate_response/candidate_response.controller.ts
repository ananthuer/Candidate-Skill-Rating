import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { CandidateResponseService } from './candidate_response.service';
import { CreateCandidateResponseDto } from './dto/create-candidate_response.dto';
import { UpdateCandidateResponseDto } from './dto/update-candidate_response.dto';
import { ApiParam, ApiQuery, ApiSecurity } from '@nestjs/swagger';
import { Roles } from 'src/gaurds/roles.decorator';
import { JwtAuthGuards } from 'src/gaurds/jwt-auth.guard';
import { RolesGuard } from 'src/gaurds/role.guard';
import { Role } from 'src/gaurds/role.enum';

@Controller('candidate-response')
export class CandidateResponseController {
  constructor(private readonly candidateResponseService: CandidateResponseService) {}

  @Post(':questionId/:candidateId')
  @ApiParam({
    name: 'questionId',
    required :true
  })
  @ApiParam({
    name: "candidateId",
    required: true
  })
  create(@Body() createCandidateResponseDto: CreateCandidateResponseDto, @Param('questionId') questionId, @Param('candidateId') candidateId) {
    return this.candidateResponseService.create(createCandidateResponseDto, questionId, candidateId);
  }

  @Get()
  @ApiSecurity('x-access-token')
  @UseGuards(JwtAuthGuards,RolesGuard)
  @Roles(Role.REVIEWER)
  findAll() {
    return this.candidateResponseService.findAll();
  }

  @Get(':id')
  @ApiSecurity('x-access-token')
  @UseGuards(JwtAuthGuards,RolesGuard)
  @Roles(Role.REVIEWER)
  findOne(@Param('id') id: string) {
    return this.candidateResponseService.findOne(+id);
  }

  @Get('getAggregatedSkills/:candidateResponceId')
  @ApiSecurity('x-access-token')
  @UseGuards(JwtAuthGuards,RolesGuard)
  @Roles(Role.REVIEWER, Role.CANDIDATE)
  getAggregatedSkills(@Param('candidateResponceId') id: string) {
    return this.candidateResponseService.getAggregatedSkills(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCandidateResponseDto: UpdateCandidateResponseDto) {
    return this.candidateResponseService.update(+id, updateCandidateResponseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.candidateResponseService.remove(+id);
  }
}
