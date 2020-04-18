// test case 01
// what is the day after 100 day from the given day?

// test case
let input = {}
input["year"] = 2020
input["month"] = 4
input["date"] = 18
input["span"] = 100
let expected = "2020年7月27日星期一"

// driver
module.exports = {
    '2020': function (browser) {
      browser
        .url('http://www.beijing-time.org/riqi.htm')
        .waitForElementVisible('body', 1000)
        .setValue('#SY', input["year"])
        .setValue('#SM', input["month"])
        .setValue('#SD', input["date"])
        .setValue('#decday', input["span"])
        .click('body > div.container.grid-sm.s-content > div.column.col-12 > article > div > div:nth-child(2) > input[type=button]:nth-child(9)')
        .pause(3000)
        .waitForElementVisible('#result1', 3000)
        .assert.containsText('#result1', expected)
        .end();
    }
};