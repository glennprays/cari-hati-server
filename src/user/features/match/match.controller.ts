import {
    Controller,
    Post,
    UseGuards,
    Request,
    Get,
    Delete,
    Body,
    Query,
} from '@nestjs/common';
import { JwtGuard } from 'src/auth/guards/jwt-auth.guard';
import {
    UserGetAllMatchDTO,
    UserRequestMatchDTO,
    UserUnmatchMatchDTO,
    UserUpdateStatusMatchDTO,
} from 'src/user/dtos/user.dto';
import { MatchService } from './match.service';
import { Passion } from 'prisma/mongo/generated/client';

@Controller('')
export class MatchController {
    constructor(private matchService: MatchService) {}

    @UseGuards(JwtGuard)
    @Post('')
    async requestMatch(
        @Body() userRequestMatchDTO: UserRequestMatchDTO,
        @Request() req,
    ) {
        return await this.matchService.userRequestMatch(
            req.user.sub.id,
            userRequestMatchDTO.receiverId,
            userRequestMatchDTO.liked,
        );
    }

    @UseGuards(JwtGuard)
    @Get('')
    async getUserMatch(
        @Body() userGetAllMatchDTO: UserGetAllMatchDTO,
        @Request() req,
    ) {
        console.log('masuk');

        return this.matchService.findAllMatchesByUserId(
            req.user.sub.id,
            userGetAllMatchDTO.accepted_only,
        );
    }

    @UseGuards(JwtGuard)
    @Delete('')
    async unmatchWithUser(
        @Body() userUnmatchtMatchDTO: UserUnmatchMatchDTO,
        @Request() req,
    ) {
        return this.matchService.unmatchWithUser(
            req.user.sub.id,
            userUnmatchtMatchDTO.receiverId,
        );
    }

    @UseGuards(JwtGuard)
    @Post('status')
    async updateMatch(
        @Body() userUpdateStatusMatchDTO: UserUpdateStatusMatchDTO,
        @Request() req,
    ) {
        return this.matchService.updateMatchStatus(
            req.user.sub.id,
            userUpdateStatusMatchDTO.id,
            userUpdateStatusMatchDTO.state,
        );
    }

    @UseGuards(JwtGuard)
    @Get('recommendations')
    async getRecommendations(@Request() req, @Query() query: any) {
        return await this.matchService.getUserMatchRecommendation(
            req.user.sub.id,
            +query.limit,
            +query.offset,
        );
    }

    // DEBUG: this is for testing the match classifier
    @UseGuards(JwtGuard)
    @Post('classifier')
    async classifyMatch(@Body() data: { passions: Passion[] }) {
        return await this.matchService.calculateUserMatchClass(data.passions);
    }
}
