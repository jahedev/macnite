function brewCli(pkg_names = []) {
  // i.e. brew install git ffmpeg
  return 'brew install ' + pkg_names.join(' ')
}

function brewCask(cask_names = []) {
  // i.e. brew install --cask discord google-chrome
  return 'brew install --cask ' + cask_names.join(' ')
}

export { brewCli, brewCask }
