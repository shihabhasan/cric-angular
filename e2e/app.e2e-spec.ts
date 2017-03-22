import { CricAngularAppPage } from './app.po';

describe('cric-angular-app App', () => {
  let page: CricAngularAppPage;

  beforeEach(() => {
    page = new CricAngularAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
