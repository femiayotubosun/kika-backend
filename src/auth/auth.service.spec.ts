import { Test, TestingModule } from '@nestjs/testing';
import { UserRoles } from 'src/user/entities/user-roles.enum';
import { UsersRepository } from 'src/user/users.respository';
import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;
  const mockUserRepository = {
    createUser: jest.fn((dto) => 2),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthService],
      providers: [UsersRepository],
    })
      .overrideProvider(UsersRepository)
      .useValue(mockUserRepository)
      .compile();

    service = module.get(AuthService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('signUp', () => {
    it('should return nothing', () => {
      const dto = {
        first_name: 'Test',
        last_name: 'Name',
        email: 'testuser@kika.com',
        password: 'testpassword',
      };

      service.signUp(dto, UserRoles.STUDENT);

      expect(mockUserRepository.createUser).toHaveBeenCalledWith(dto);
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

  describe('googleLogin', () => {
    it('should return whatever was passed in', () => {
      expect(service.googleLogin('email')).toEqual('email');
    });
  });
});
