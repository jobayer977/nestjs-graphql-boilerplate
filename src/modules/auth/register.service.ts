import { RegisterInput, ResendOtpInput, VerifyInput } from './requests';

import { Injectable } from '@nestjs/common';
import { JWTHelper } from '../helpers/jwt.helper';
import { MailerService } from './../helpers/mailer.service';
import { OtpService } from './../common/otp/otp.service';
import { UserRoles } from 'src/enums';
import { UserService } from '../users/user.service';

/*
https://docs.nestjs.com/providers#services
*/
@Injectable()
export class RegisterService {
	constructor(
		private userService: UserService,
		private readonly jwtHelper: JWTHelper,
		private readonly otpService: OtpService,
		private mailerService: MailerService
	) {}
	async admin(payload: RegisterInput): Promise<any> {
		try {
			const user = await this.userService.checkIfUserExist(payload.email);
			if (user) throw new Error('User already exist');
			const newUser = await this.userService.createUser({
				email: payload.email,
				password: payload.password,
				username: payload.username,
			});
			await this.userService.assignUserRole(newUser.id, [UserRoles.ADMIN]);
			const token = await this.jwtHelper.makeAccessToken({
				id: newUser.id,
			});
			return token;
		} catch (error) {
			throw error;
		}
	}
	async individual(payload: RegisterInput): Promise<any> {
		try {
			const user = await this.userService.userModel.findOne({
				email: payload.email?.toLowerCase(),
			});
			if (user && user?.isVerified) {
				throw new Error('User already exist');
			}
			if (user && user?.isVerified === false) {
				const saveOtp = await this.otpService.createOrUpdateOtp({
					email: user.email?.toLowerCase(),
				});
				await this.otpService.sendOTPToEmail({
					to: user.email,
					otp: saveOtp.otp,
				});
				const res = {
					otp: saveOtp.otp,
					email: user.email,
				};
				return res;
			}
			const newUser = await this.userService.createUser({
				email: payload.email,
				password: payload.password,
				username: payload.username,
			});
			await this.userService.assignUserRole(newUser.id, [UserRoles.INDIVIDUAL]);
			const saveOtp = await this.otpService.createOrUpdateOtp({
				email: newUser.email,
			});
			await this.otpService.sendOTPToEmail({
				to: newUser.email,
				otp: saveOtp.otp,
			});
			const res = {
				otp: saveOtp.otp,
				email: newUser.email,
			};
			return res;
		} catch (error) {
			throw error;
		}
	}
	async individualVerify(payload: VerifyInput): Promise<any> {
		try {
			const user = await this.userService.checkIfUserExist(payload.email);
			if (!user) throw new Error('User not found');
			const otpDoc = await this.otpService.verifyOTP({
				email: user.email,
				otp: payload.otp,
			});
			if (!otpDoc) throw new Error('Invalid OTP');
			const token = await this.jwtHelper.makeAccessToken({
				id: user.id,
				username: user.username,
			});
			await this.otpService.disposeOtp({ email: user.email });
			await this.userService.updateUser(user.id, {
				isVerified: true,
			});
			return token;
		} catch (error) {
			throw error;
		}
	}
	async individualResendOTP(payload: ResendOtpInput): Promise<any> {
		try {
			const user = await this.userService.checkIfUserExist(payload.email);
			if (!user) throw new Error('User not found');
			const saveOtp = await this.otpService.createOrUpdateOtp({
				email: user.email,
			});
			await this.otpService.sendOTPToEmail({
				to: user.email,
				otp: saveOtp.otp,
			});
			const res = {
				otp: saveOtp.otp,
				email: user.email,
			};
			return res;
		} catch (error) {
			throw error;
		}
	}
}
