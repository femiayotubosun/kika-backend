import { Test, TestingModule } from '@nestjs/testing';
import { UserRepository } from './users.respository';

describe('UserRepository', () => {
  let service: UserRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserRepository],
      providers: [],
    }).compile();

    service = module.get(UserRepository);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('createStudentUser', () => {
    it('should', () => {});
  });

  describe('_hashpassword', () => {
    it('should', () => {});
  });
});
