import { AccessModule } from '../access/access.module';
import { CommonModule } from '../common/common.module';
import { FacebookStrategy } from './strategies/facebook.strategy';
import { GoogleStrategy } from './strategies/google.strategy';
import { HelpersModule } from '../helpers';
import { LoginResolver } from './login.resolver';
import { LoginService } from './login.service';
import { Module } from '@nestjs/common';
import { OAuthController } from './oauth.controller';
import { PasswordResolver } from './password.resolver';
import { PasswordService } from './password.service';
import { RegisterResolver } from './register.resolver';
import { RegisterService } from './register.service';
import { UserModule } from '../users/user.module';

@Module({
	imports: [HelpersModule, UserModule, CommonModule, AccessModule],
	controllers: [OAuthController],
	providers: [
		LoginService,
		RegisterService,
		GoogleStrategy,
		FacebookStrategy,
		PasswordService,
		LoginResolver,
		RegisterResolver,
		PasswordResolver,
	],
})
export class AuthModule {}
