text = """
// equivalent test for function 2
// what is the time span in day
// between two given dates within input

// constants:
// 1. the url of test web site
const test_web_url = 'http://www.beijing-time.org/riqi.htm'
// 2. the js path of calculate button
const calc_button = 'body > div.container.grid-sm.s-content > div.column.col-12 > article > div > div:nth-child(6) > input[type=button]:nth-child(12)'

// test case {num}
let input = {{}}
input["year1"] = {y1}
input["month1"] = {m1}
input["date1"] = {d1}
input["year2"] = {y2}
input["month2"] = {m2}
input["date2"] = {d2}
let expected = "{exp}"
module.exports = {
    'test_case_{num}':  function (browser) {
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
    """


def writeSingleFile(content):
    print(text.format(**content))


content = {}
content["y1"] = 2020
content["m1"] =  1
content["d1"] =  4
content["y2"] =  2020
content["m2"] =  2
content["d2"] =  3
content["num"] = "03"
content["exp"] = 22

writeSingleFile(content)
