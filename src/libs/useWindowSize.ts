const { useState, useEffect } = require('react')

type WindowSize = {
  height: number
  width: number
}

function getSize(): WindowSize {
  if (typeof window !== 'object') {
    return {
      height: 1000,
      width: 800,
    }
  }

  return {
    height: window.innerHeight,
    width: window.innerWidth,
  }
}

export function useWindowSize(): WindowSize {
  const [windowSize, setWindowSize] = useState(getSize())

  function handleResize() {
    setWindowSize(getSize())
  }

  useEffect(() => {
    if (typeof window !== 'object') {
      return
    }

    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return windowSize
}
