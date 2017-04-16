import { LumosNoxQuizPage } from './app.po';

describe('lumos-nox-quiz App', () => {
  let page: LumosNoxQuizPage;

  beforeEach(() => {
    page = new LumosNoxQuizPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
