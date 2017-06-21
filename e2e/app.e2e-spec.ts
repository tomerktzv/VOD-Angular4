import { VODPage } from './app.po';

describe('vod App', () => {
  let page: VODPage;

  beforeEach(() => {
    page = new VODPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
