// http://nightwatchjs.org/gettingstarted#settings-file
module.exports = {
  src_folders: ['case'],
  'webdriver': {
    'server_path': './chromedriver', 
    'start_process': true,
    'port': 9515 
  },
  'test_settings': {
    'default': {
      'desiredCapabilities': {
        'browserName': 'chrome'
      }
    }
  }
}
