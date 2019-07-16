function detectPlatform() {
  var plat = navigator.platform
  if (plat) {
    if (plat.match(/win/i)) {
      if (plat.match(/32/)) {
        return 'win32'
      } else if (plat.match(/64/)) {
        return 'win64'
      } else {
        return 'win'
      }
    } else if (plat.match(/mac/i)) {
      return 'mac'
    } else {
      return 'linux'
    }
  }
}