import React, { useState } from 'react'

export const useHook1 = () => {
  //* hooklar hangi componentte kullanlırsa kullanılsın, ayrı ayrı parçalarmış gibi davranır.
  //* ama context tüm componentlerde eşit veriyi verir.
  //* custom hooklar genellikle tekrar eden fonksiyonlar yazılır.
  console.log("usehook1 refresh")
  const [value, setValue] = useState(0)

  const getValue = () => {
    return value
  }

  const incrementCount = () => {
    setValue(p => p + 1)
  }

  const decrementCount = () => {
    setValue(p => p - 1)
  }

  return {
    getValue,
    decrementCount,
    incrementCount

  }
}

