/**
 * @jest-environment jsdom
 */

import itemsCounter from '../modules/itemsCounter.js';

describe('Items Count', () => {
  test('0 for no items', () => {
    document.body.innerHTML = `
    <div id="movies">
    </div>
    `;
    expect(itemsCounter()).toBe(0);
  });

  test('1 item', () => {
    document.body.innerHTML = `
    <div id="movies">
      <div class="series"></div>
    </div>
    `;
    expect(itemsCounter()).toBe(1);
  });

  test('more than 2', () => {
    document.body.innerHTML = `
    <div id="movies">
      <div class="series"></div>
      <div class="series"></div>
      <div class="series"></div>
      <div class="series"></div>
    </div>
    `;
    expect(itemsCounter()).toBe(4);
  });

  test('30 items', () => {
    document.body.innerHTML = `
    <div id="movies">
      <div class="series"></div>
      <div class="series"></div>
      <div class="series"></div>
      <div class="series"></div>
      <div class="series"></div>
      <div class="series"></div>
      <div class="series"></div>
      <div class="series"></div>
      <div class="series"></div>
      <div class="series"></div>
      <div class="series"></div>
      <div class="series"></div>
      <div class="series"></div>
      <div class="series"></div>
      <div class="series"></div>
      <div class="series"></div>
      <div class="series"></div>
      <div class="series"></div>
      <div class="series"></div>
      <div class="series"></div>
      <div class="series"></div>
      <div class="series"></div>
      <div class="series"></div>
      <div class="series"></div>
      <div class="series"></div>
      <div class="series"></div>
      <div class="series"></div>
      <div class="series"></div>
      <div class="series"></div>
      <div class="series"></div>
    </div>
    `;
    expect(itemsCounter()).toBe(30);
  });

  test('Too much items', () => {
    document.body.innerHTML = `
    <div id="movies">
      <div class="series"></div>
      <div class="series"></div>
      <div class="series"></div>
      <div class="series"></div>
      <div class="series"></div>
      <div class="series"></div>
      <div class="series"></div>
      <div class="series"></div>
      <div class="series"></div>
      <div class="series"></div>
      <div class="series"></div>
      <div class="series"></div>
      <div class="series"></div>
      <div class="series"></div>
      <div class="series"></div>
      <div class="series"></div>
      <div class="series"></div>
      <div class="series"></div>
      <div class="series"></div>
      <div class="series"></div>
      <div class="series"></div>
      <div class="series"></div>
      <div class="series"></div>
      <div class="series"></div>
      <div class="series"></div>
      <div class="series"></div>
      <div class="series"></div>
      <div class="series"></div>
      <div class="series"></div>
      <div class="series"></div>
      <div class="series"></div>
    </div>
    `;
    expect(itemsCounter()).toBe('Error');
  });
});