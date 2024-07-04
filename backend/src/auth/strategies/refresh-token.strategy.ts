import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { UserEntity } from "src/user/entities/user.entity";
import { ValidateUserUseCase } from "src/user/useCases/validate-user.usecase";
import { ExtractJwt, Strategy } from 'passport-jwt';
import { ConfigService } from "src/general/service/config.service";

@Injectable()
export class RefreshStrategy extends PassportStrategy(Strategy, 'refresh-token') {
  constructor(private configService: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromBodyField("refreshToken"),
      ignoreExpiration: false,
      secretOrKey: configService.authConfig.refreshToken,
    });
  }
  async validate(payload: any) {
    return { userId: payload.sub, username: payload.username };
  }
}
