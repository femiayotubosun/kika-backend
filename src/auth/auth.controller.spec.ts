import { Test, TestingModule } from '@nestjs/testing';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

describe('AuthController', () => {
  let controller: AuthController;

  // NOTE mock the authservice in UNIT TEST

  const mockAuthService = {
    signUp: jest.fn((dto) => {
      return {
        id: Date.now(),
        ...dto,
      };
    }),

    logIn: jest.fn((dto) => {
      return {
        token: Date.now().toString(),
      };
    }),

    forgotPassword: jest.fn((dto) => {
      return {
        ...dto,
      };
    }),

    googleLogin: jest.fn((dto) => {
      return dto;
    }),

    logOut: jest.fn(() => null),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [AuthService],
    })
      .overrideProvider(AuthService)
      .useValue(mockAuthService)
      .compile();

    controller = module.get<AuthController>(AuthController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should create a user', () => {
    const dto = {
      first_name: 'Test',
      last_name: 'Name',
      email: 'testuser@kika.com',
      password: 'testpassword',
    };
    expect(controller.signUp(dto)).toEqual({
      id: expect.any(Number),
      ...dto,
    });
    expect(mockAuthService.signUp).toHaveBeenCalledWith(dto);
  });

  it('should return a token', () => {
    const dto = { email: 'user@kika.com', password: 'testpass' };
    expect(controller.logIn(dto)).toEqual({
      token: expect.any(String),
    });

    expect(mockAuthService.logIn).toHaveBeenCalledWith(dto);
  });

  it('google-login should return the email', () => {
    expect(
      controller.googleLogIn({
        email: 'testemail@email.com',
      }),
    ).toEqual({
      email: 'testemail@email.com',
    });
  });
});
