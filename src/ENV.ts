import * as path from 'path';

import { config } from 'dotenv';

config({
	path: path.join(
		process.cwd(),
		'environments',
		`${process.env.NODE_ENV || 'development'}.env`
	),
});
export const ENV_DEVELOPMENT = 'development';
export const ENV_PRODUCTION = 'production';
export const ENV_STAGING = 'staging';
export const ENV = {
	port: +process.env.PORT,
	env: process.env.NODE_ENV || ENV_DEVELOPMENT,
	isProduction: process.env.NODE_ENV === ENV_PRODUCTION,
	isStaging: process.env.NODE_ENV === ENV_STAGING,
	isDevelopment: process.env.NODE_ENV === ENV_DEVELOPMENT,

	api: {
		API_PREFIX: process.env.API_PREFIX,
		API_TITLE: process.env.API_TITLE,
		API_DESC: process.env.API_DESC,
		API_VERSION: process.env.API_VERSION,
	},

	jwt: {
		JWT_SECRET: process.env.JWT_SECRET,
		SALT_ROUNDS: Number(process.env.SALT_ROUNDS) || 10,
		EXPIRES_IN: process.env.EXPIRES_IN,
		REFRESH_TOKEN_EXPIRES_IN: process.env.REFRESH_TOKEN_EXPIRES_IN,
		RESET_PASSWORD_EXPIRES_IN: process.env.RESET_PASSWORD_EXPIRES_IN,
		OTP_EXPIRES_IN: process.env.OTP_EXPIRES_IN,
	},

	MONGO_URI: process.env.MONGO_URI,
	OTP_EXPIRE_TIME_IN_MINUTES: process.env.OTP_EXPIRE_TIME_IN_MINUTES,
	OTP_LENGTH: process.env.OTP_LENGTH,
	GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
	GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
	GOOGLE_CALLBACK_URL: process.env.GOOGLE_CALLBACK_URL,
	OAUTH_REDIRECT_URL: process.env.OAUTH_REDIRECT_URL,

	FACEBOOK_APP_ID: process.env.FACEBOOK_APP_ID,
	FACEBOOK_CLIENT_SECRET: process.env.FACEBOOK_CLIENT_SECRET,
	FACEBOOK_CALLBACK_URL: process.env.FACEBOOK_CALLBACK_URL,

	//DIGITAL OCEAN
	DO_SPACES_ENDPOINT: process.env.DO_SPACES_ENDPOINT,
	DO_SPACES_KEY: process.env.DO_SPACES_KEY,
	DO_SECRETS_KEY: process.env.DO_SECRETS,
};
