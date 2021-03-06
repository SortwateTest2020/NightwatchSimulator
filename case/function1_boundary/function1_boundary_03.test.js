// boundary test for function 1
// what is the date after @input["sapn"] day
// of a given date in input

// constants:
// 1. the url of test web site
const test_web_url = 'http://www.beijing-time.org/riqi.htm'
// 2. the js path of calculate button
const calc_button = 'body > div.container.grid-sm.s-content > div.column.col-12 > article > div > div:nth-child(2) > input[type=button]:nth-child(9)'

// test case 03
let input = {}
input["year"] = 1900
input["month"] = 1
input["date"] = 1
input["span"] = 100000000
let expected = "275690年9月12日星期二"
module.exports = {
    'test_case_03':  function (browser) {
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