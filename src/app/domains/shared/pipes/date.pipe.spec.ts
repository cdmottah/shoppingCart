import { GlobalCurrencyPipe } from './date.pipe';

describe('DatePipe', () => {
  it('create an instance', () => {
    const pipe = new GlobalCurrencyPipe();
    expect(pipe).toBeTruthy();
  });
});
