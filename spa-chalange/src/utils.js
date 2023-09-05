let productData = [
    {id: 1, title: 'SONY'},
    {id: 2, title: 'SAMSUNG'},
    {id: 3, title: 'LG'},
    {id: 4, title: 'APPLE'},
  ]

  const isLogin = (userName) =>{
    if (userName === 'hosein') {
      return true
    }

    return false
  }

  let isUserLogin = isLogin('hosein')

  export {productData, isLogin, isUserLogin}