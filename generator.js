module.exports = (api, options, rootOptions) => {
  api.extendPackage({
    scripts: {
      "docker": 'docker run .'
    }
  })

  api.render('./Dockerfile')
}
