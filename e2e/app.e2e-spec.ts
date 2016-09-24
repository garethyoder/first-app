import { FirstDemoAppPage } from './app.po';

describe('first-demo-app App', function() {
  let page: FirstDemoAppPage;

  beforeEach(() => {
    page = new FirstDemoAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
