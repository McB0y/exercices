import { InputsPage } from './app.po';

describe('inputs App', function() {
  let page: InputsPage;

  beforeEach(() => {
    page = new InputsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
