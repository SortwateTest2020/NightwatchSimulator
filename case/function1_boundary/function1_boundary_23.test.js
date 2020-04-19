// boundary test for function 1
// what is the date after @input["sapn"] day
// of a given date in input

// constants:
// 1. the url of test web site
const test_web_url = 'http://www.beijing-time.org/riqi.htm'
// 2. the js path of calculate button
const calc_button = 'body > div.container.grid-sm.s-content > div.column.col-12 > article > div > div:nth-child(2) > input[type=button]:nth-child(9)'

// test case 23
let input = {}
input["year"] = 2020
input["month"] = 4
input["date"] = 29
input["span"] = 1
let expected = "2020年4月30日星期四"
module.exports = {
    'test_case_23':  function (browser) {
      browser
        .url(test_web_url)
        .setValue('#SY', input["year"])
        .setValue('#SM', input["month"])
        .setValue('#SD', input["date"])
        .setValue('#decday', input["span"])
        .click(calc_button, function(response) {
          this.assert.containsText('#result1', expected)
        })
        .end();
    }
};
