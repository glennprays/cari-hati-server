import {
    Controller,
    Post,
    UseGuards,
    Request,
    Get,
    Delete,
    Body,
    Query,
    Param,
} from '@nestjs/common';
import { JwtGuard } from 'src/auth/guards/jwt-auth.guard';
import {
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
        @Query('accepted_only') acceptedOnly: string,
        @Request() req,
    ) {
        return this.matchService.findAllMatchesByUserId(
            req.user.sub.id,
            acceptedOnly === 'true' ? true : false,
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

    @UseGuards(JwtGuard)
    @Get(':id')
    async getMatchById(@Request() req, @Param('id') id: string) {
        return this.matchService.findMatch(req.user.sub.id, id);
    }

    @UseGuards(JwtGuard)
    @Delete('')
    async unmatchWithUser(
        @Body() userUnmatchtMatchDTO: UserUnmatchMatchDTO,
        @Request() req,
    ) {
        return this.matchService.unmatchWithUser(
            req.user.sub.id,
            userUnmatchtMatchDTO.target,
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

    // DEBUG: this is for testing the match classifier
    @UseGuards(JwtGuard)
    @Post('classifier')
    async classifyMatch(@Body() data: { passions: Passion[] }) {
        return await this.matchService.calculateUserMatchClass(data.passions);
    }
}
