import { Content } from './content';

describe('Test content', () => {
  it('Should be able to create a notification content', () => {
    const content = new Content('Você passou no teste');

    expect(content).toBeTruthy();
  });

  it('Should not be able to create a notification content if less than 5 characteres', () => {
    expect(() => new Content('aaa')).toThrow;
  });

  it('Should not be able to create a notification content if more than 240 characteres', () => {
    expect(() => new Content('a'.repeat(241))).toThrow;
  });
});
