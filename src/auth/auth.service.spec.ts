import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthService],
      providers: [],
    }).compile();

    service = module.get(AuthService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('signUp', () => {
    it('should return data passed in', () => {
      const dto = {
        first_name: 'Test',
        last_name: 'Name',
        email: 'testuser@kika.com',
        password: 'testpassword',
      };
      expect(service.signUp(dto)).toEqual(dto);
    });
  });

  describe('logIn', () => {
    it('should return data passed in', () => {
      const dto = {
        first_name: 'Test',
        last_name: 'Name',
        email: 'testuser@kika.com',
        password: 'testpassword',
      };

      expect(service.logIn(dto)).toEqual(dto);
    });
  });

  describe('forgotPassword', () => {
    const dto = {
      email: 'test@email.co',
    };
    it('should return forgotPasswordDto', () => {
      expect(service.forgotPassword(dto)).toEqual(dto);
    });
  });

  describe('googleLogin', () => {
    it('should return whatever was passed in', () => {
      expect(service.googleLogin('email')).toEqual('email');
    });
  });

  describe('logOut', () => {
    it('should', () => {
      expect(service.logOut()).toEqual(null);
    });
  });
});
