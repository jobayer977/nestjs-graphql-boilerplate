import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

import { AccessModule } from './modules/access/access.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { CommonModule } from './modules/common/common.module';
import { DatabaseModule } from './database/database.module';
import { GraphQLModule } from '@nestjs/graphql';
import { HelpersModule } from './modules/helpers/helpers.module';
import { Module } from '@nestjs/common';
import { UserModule } from './modules/users/user.module';
import { join } from 'path';

@Module({
	imports: [
		CommonModule,
		UserModule,
		HelpersModule,
		AuthModule,
		DatabaseModule,
		AccessModule,
		GraphQLModule.forRoot<ApolloDriverConfig>({
			driver: ApolloDriver,
			autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
		}),
	],
	controllers: [AppController],
	providers: [
		AppService,
		// {
		// 	provide: APP_FILTER,
		// 	useClass: AppExceptionFilter,
		// },
		// {
		// 	provide: APP_INTERCEPTOR,
		// 	useClass: AppResponseInterceptor,
		// },
	],
})
export class AppModule {}
