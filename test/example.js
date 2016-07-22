require('../ambit.js')("example", function() {
	driver.get("http://www.google.com");
	driver.wait(until.titleIs('Google'), 30000);
	driver.findElement(By.name('q')).sendKeys('webdriver');
	driver.sleep(2000);
	driver.findElement(By.name('btnG')).click();
	driver.wait(until.titleContains('webdriver'), 3000);
	driver.getTitle().then(function(title) {
	  console.log(title);
	});
});