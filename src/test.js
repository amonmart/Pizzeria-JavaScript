class Test{
  test () {
    array.reduce(function (accu, item) {
      accu.push(item)
      return accu
    }, [])
  }
}
