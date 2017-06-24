import { SportsPage } from './app.po';

describe('sports App', () => {
  let page: SportsPage;

  beforeEach(() => {
    page = new SportsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
