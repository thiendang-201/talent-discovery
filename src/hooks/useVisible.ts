import { useCallback, useMemo, useState } from 'react'

type UseVisibleActions = {
  on: () => void
  off: () => void
  toggle: () => void
  changeVisible: (value: boolean) => void
}

export const useVisible = (inital = false): [boolean, UseVisibleActions] => {
  const [isVisible, changeVisible] = useState(inital)

  const on = useCallback(() => changeVisible(true), [])
  const off = useCallback(() => changeVisible(false), [])
  const toggle = useCallback(() => changeVisible(isVisible => !isVisible), [])

  const setToggle = useMemo(
    () => ({
      on,
      off,
      toggle,
      changeVisible,
    }),
    [on, off, toggle, changeVisible]
  )

  return [isVisible, setToggle]
}
