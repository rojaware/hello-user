import { HelloUserPage } from './app.po';

describe('hello-user App', () => {
  let page: HelloUserPage;

  beforeEach(() => {
    page = new HelloUserPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
