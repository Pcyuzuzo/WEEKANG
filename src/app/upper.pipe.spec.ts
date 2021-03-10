import { Upper} from './upper.pipe';

describe('UpperPipe', () => {
  it('create an instance', () => {
    const pipe = new Upper();
    expect(pipe).toBeTruthy();
  });
});
