import { GlobalCurrencyPipe } from './global.currency.pipe';

describe('DatePipe', () => {
  it('create an instance', () => {
    const pipe = new GlobalCurrencyPipe();
    expect(pipe).toBeTruthy();
  });
});
