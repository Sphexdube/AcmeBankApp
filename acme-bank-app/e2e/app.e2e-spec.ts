import { AcmeBankAppPage } from './app.po';

describe('acme-bank-app App', () => {
  let page: AcmeBankAppPage;

  beforeEach(() => {
    page = new AcmeBankAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
