<<<<<<< HEAD
import { browser, element, by } from 'protractor';

export class RecipeBookNewPage {
=======
export class RecipeBookPage {
>>>>>>> 36ee13d230081e32f24434d351365481236b2c4b
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
<<<<<<< HEAD
    return element(by.css('app-root h1')).getText();
=======
    return element(by.css('rb-root h1')).getText();
>>>>>>> 36ee13d230081e32f24434d351365481236b2c4b
  }
}
