import { PipePipe } from './pipe.pipe';

describe('PipePipe', () => {
  it('create an instance', () => {
    const pipe = new PipePipe();
    expect(pipe).toBeTruthy();
  });

  it('should display weak if 5 value is passed',()=>{
    const pipe = new PipePipe();
    expect(pipe.transform(5)).toEqual('5(weak)');
  })

  it('should display strong if 10 value is passed',()=>{
    const pipe = new PipePipe();
    expect(pipe.transform(10)).toEqual('10(strong)');
  })
});
