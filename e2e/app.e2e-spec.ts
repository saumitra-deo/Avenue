import { AvenuesPage } from './app.po';

describe('avenues App', () => {
  let page: AvenuesPage;

  beforeEach(() => {
    page = new AvenuesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
