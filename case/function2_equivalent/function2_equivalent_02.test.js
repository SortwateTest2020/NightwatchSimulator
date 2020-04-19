// equivalent test for function 2
// what is the time span in day
// between two given dates within input

// constants:
// 1. the url of test web site
const test_web_url = 'http://www.beijing-time.org/riqi.htm'
// 2. the js path of calculate button
const calc_button = 'body > div.container.grid-sm.s-content > div.column.col-12 > article > div > div:nth-child(6) > input[type=button]:nth-child(12)'

// test case 01
let input = {}
input["year1"] = 2000
input["month1"] = 6
input["date1"] = 30
input["year2"] = 2000
input["month2"] = 4
input["date2"] = 29
let expected = "-62"
module.exports = {
    'test_case_02':  function (browser) {
      browser
        .url(test_web_url)
        .setValue('#SY2', input["year1"])
        .setValue('#SM2', input["month1"])
        .setValue('#SD2', input["date1"])
        .setValue('#SY3', input["year2"])
        .setValue('#SM3', input["month2"])
        .setValue('#SD3', input["date2"])
        .click(calc_button, function(response) {
          this.assert.containsText('#result2', expected)
        })
        .end();
    }
};