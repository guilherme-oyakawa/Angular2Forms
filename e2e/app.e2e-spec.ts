import { NewAngularProjectPage } from './app.po';

describe('new-angular-project App', () => {
  let page: NewAngularProjectPage;

  beforeEach(() => {
    page = new NewAngularProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
