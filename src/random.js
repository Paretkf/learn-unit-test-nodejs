const random = function (st, en) {
  const result = st + Math.random() * en
  return Math.floor(result)
}
module.exports = random
