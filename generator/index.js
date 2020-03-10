module.exports = (api, options, rootOptions) => {
  api.extendPackage({
    scripts: {
      docker: 'docker build . -t app && docker run -d -p 8080:8080 app'
    }
  })

  api.render('./template')
}
