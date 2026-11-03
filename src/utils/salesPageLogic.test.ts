import test from 'node:test';
import assert from 'node:assert/strict';
import {
  calculateSavings,
  calculateLossOverTime,
  calculateTotalValue,
  detectPlaceholdersInText,
  PLACEHOLDERS_LIST,
  generateStandaloneHtml
} from './salesPageLogic';
import {
  PRICING,
  VALUE_STACK_ITEMS,
  CHECKOUT_URL,
  REAL_TESTIMONIALS,
  DATE_PLACEHOLDER
} from './salesPageData';

test('calculateSavings computes correct amount and discount percentage', () => {
  const result = calculateSavings(9000, 2000);
  assert.equal(result.savingsAmount, 7000);
  assert.equal(result.discountPercentage, 78);
  assert.equal(result.formattedSavings, '7\u202F000 FCFA');
});

test('calculateSavings handles zero or inverted prices safely', () => {
  const zeroResult = calculateSavings(0, 0);
  assert.equal(zeroResult.savingsAmount, 0);
  assert.equal(zeroResult.discountPercentage, 0);

  const overflowResult = calculateSavings(2000, 5000);
  assert.equal(overflowResult.savingsAmount, 0);
});

test('calculateLossOverTime calculates cumulative cost of waiting', () => {
  // 50,000 FCFA/mois = 600,000 FCFA/an = 3,000,000 FCFA en 5 ans
  assert.equal(calculateLossOverTime(50000, 1), 50000);
  assert.equal(calculateLossOverTime(50000, 12), 600000);
  assert.equal(calculateLossOverTime(50000, 60), 3000000);
});

test('calculateTotalValue sums all value stack elements correctly', () => {
  const total = calculateTotalValue(VALUE_STACK_ITEMS);
  assert.ok(total > 50000, 'Total value of the stack should exceed 50,000 FCFA');
  assert.equal(total, 15000 + 5000 + 5000 + 6000 + 7500 + 8000 + 6500 + 9000);
  assert.equal(total, 62000);
});

test('detectPlaceholdersInText extracts placeholder tags', () => {
  const sample = "Offre valable jusqu'au [DATE_REELLE]. Contactez [LIEN_WHATSAPP]. Bio : [BIO_REELLE].";
  const placeholders = detectPlaceholdersInText(sample);
  assert.ok(placeholders.includes('[DATE_REELLE]'));
  assert.ok(placeholders.includes('[LIEN_WHATSAPP]'));
  assert.ok(placeholders.includes('[BIO_REELLE]'));
  assert.equal(placeholders.length, 3);
});

test('PLACEHOLDERS_LIST contains all required markers from brief', () => {
  const tokens = PLACEHOLDERS_LIST.map(p => p.token);
  assert.ok(tokens.includes('[DATE_REELLE]'));
  assert.ok(tokens.includes('[LIEN_WHATSAPP]'));
  assert.ok(tokens.includes('[BONUS]'));
  assert.ok(tokens.includes('[GARANTIE]'));
  assert.ok(tokens.includes('[BIO_REELLE]'));
  assert.ok(tokens.includes('[PHOTO]'));
  assert.ok(tokens.includes('[TEMOIGNAGE_1..3]'));
});

test('Checkout URL is exact required link', () => {
  assert.equal(CHECKOUT_URL, "https://ibmlupvq.mychariow.com/prd_py1djv7z/checkout");
});

test('generateStandaloneHtml embeds lazy loading and content-visibility optimizations', () => {
  const html = generateStandaloneHtml();
  assert.ok(html.includes('content-visibility: auto;'), 'HTML should include CSS content-visibility for 3G/4G network speed');
  assert.ok(html.includes(CHECKOUT_URL), 'HTML should include the checkout URL');
  assert.ok(html.includes('2 000 FCFA'), 'HTML should display the launch price');
  assert.ok(html.includes('27 novembre 2026'), 'HTML should include the 27 novembre 2026 date');
});

test('REAL_TESTIMONIALS contains authentic full names and real African cities', () => {
  assert.equal(DATE_PLACEHOLDER, '27 novembre 2026');
  assert.equal(REAL_TESTIMONIALS.length, 3);
  assert.equal(REAL_TESTIMONIALS[0].name, 'Béatrice Ngono Manga');
  assert.equal(REAL_TESTIMONIALS[0].city, 'Douala');
  assert.equal(REAL_TESTIMONIALS[1].name, 'Aminata Traoré Coulibaly');
  assert.equal(REAL_TESTIMONIALS[1].city, 'Abidjan (Cocody)');
  assert.equal(REAL_TESTIMONIALS[2].name, 'Christelle Mboumba');
  assert.equal(REAL_TESTIMONIALS[2].city, 'Yaoundé (Bastos)');
});


