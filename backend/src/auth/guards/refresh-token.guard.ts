import { ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthGuard } from '@nestjs/passport';
import { Observable } from 'rxjs';
import { ConfigService } from 'src/general/service/config.service';

@Injectable()
export class RefreshJwtGuard extends AuthGuard('refresh-token') {
  constructor(
    private jwtService: JwtService,
    private configService: ConfigService){
      super()
  }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    
    const request = context.switchToHttp().getRequest();
    console.log(request.body.refreshToken)
    try {
      const payload = await this.jwtService.verifyAsync(request.body.refreshToken, {secret: this.configService.authConfig.refreshToken})
      request["user"] = payload
      
    } catch (error) {
      throw new UnauthorizedException();

    }
    return  true
  }
  
}