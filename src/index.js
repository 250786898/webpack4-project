document.addEventListener('click', () => {
  import(/*webpackPrefetch: true */ './loadsh').then(({default: _}) => {
    _()
  })
})

