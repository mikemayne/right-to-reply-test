import assert from 'node:assert/strict';
import { chromium } from 'playwright';
import { spawn } from 'node:child_process';
const server = spawn('python', ['-m','http.server','8765','--bind','127.0.0.1'], {stdio:'ignore'});
let browser;
try {
  const base = 'http://127.0.0.1:8765/';
  for (let i=0;i<50;i++) {
    try { if ((await fetch(base)).ok) break; } catch {}
    await new Promise(r=>setTimeout(r,100));
  }
  browser = await chromium.launch({headless:true});
  const page = await browser.newPage({viewport:{width:900,height:760}});
  await page.goto(base);
  const shared = page.locator('[data-keyword="magna aliqua"]');
  await shared.click();
  await page.waitForFunction(()=>document.querySelectorAll('.reply-short').length===5);
  assert.equal(await page.locator('.reply-detail:visible').count(),0);
  assert.equal(await page.locator('.reply-logo').isVisible(),true);
  assert.equal(await page.locator('.reply-brand strong').textContent(),'Independent browser extension');
  assert.equal(await page.locator('.reply-brand small').textContent(),'Not supplied by this publication');
  const colors = await page.locator('.reply-short').evaluateAll(nodes=>nodes.map(n=>getComputedStyle(n).color));
  assert.equal(new Set(colors).size,1);
  const underlines = await page.locator('.preview-keyword').evaluateAll(nodes=>nodes.map(n=>({color:getComputedStyle(n).textDecorationColor, background:getComputedStyle(n).backgroundImage})));
  assert.equal(new Set(underlines.map(x=>x.color)).size,1);
  assert.ok(underlines.every(x=>x.background==='none'));
  assert.equal(await page.locator('.reply-detail strong:visible').count(),0);
  const first = page.locator('.reply-short').first();
  await first.click();
  assert.equal(await page.locator('.reply-detail:visible').count(),1);
  assert.match(await page.locator('.reply-detail:visible strong').textContent(),/Party$/);
  await first.click();
  assert.equal(await page.locator('.reply-detail:visible').count(),0);
  const last = page.locator('.reply-short').last();
  await last.scrollIntoViewIfNeeded();
  const pageY = await page.evaluate(()=>scrollY);
  await last.click();
  const geometry = await page.locator('.reply-detail:visible').evaluate(detail=>{
    const panel = document.querySelector('#reply-popup');
    return {bottom:detail.getBoundingClientRect().bottom,
      panelBottom:panel.getBoundingClientRect().top + panel.clientTop + panel.clientHeight,
      scrollTop:panel.scrollTop, pageY:scrollY};
  });
  assert.ok(geometry.bottom <= geometry.panelBottom + 1, 'expanded final reply must be visible');
  assert.ok(geometry.scrollTop > 0, 'overflowing panel must scroll');
  assert.equal(geometry.pageY,pageY,'article must not scroll when a reply expands');
  await page.keyboard.press('Escape');
  await page.locator('[data-keyword="ullamco laboris"]').click();
  await page.waitForFunction(()=>document.querySelectorAll('.reply-short').length===2);
  await page.keyboard.press('Escape');
  await page.locator('[data-keyword="voluptate velit"]').click();
  await page.waitForFunction(()=>document.querySelectorAll('.reply-short').length===1);
  await page.goto(base+'test.html');
  assert.equal(await page.locator('.preview-keyword,#reply-popup').count(),0);
  console.log('Five-, two- and single-response preview, expand/collapse and clean test page passed.');
} finally {
  await browser?.close();
  server.kill();
}
