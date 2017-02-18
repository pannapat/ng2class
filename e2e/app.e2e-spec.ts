import { Ng2classPage } from './app.po';

describe('ng2class App', function() {
  let page: Ng2classPage;

  beforeEach(() => {
    page = new Ng2classPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
