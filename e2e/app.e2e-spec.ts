import { TranjiraPage } from './app.po';

describe('tranjira App', function() {
  let page: TranjiraPage;

  beforeEach(() => {
    page = new TranjiraPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
