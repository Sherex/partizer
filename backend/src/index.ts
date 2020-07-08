function test(msg?: string) {
  if (!msg) return false
  console.log(msg)
  return true
}

test('12345')