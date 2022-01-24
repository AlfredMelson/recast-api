import * as React from 'react'

function loadHistory() {
  let historicalData: { history: string }
  try {
    historicalData = JSON.parse(localStorage.getItem('historicalData'))
  } catch {}
  if (historicalData != null) {
    return historicalData.history
  }
}

function saveHistory(history: string) {
  const historySaved = JSON.stringify(history)
  try {
    localStorage.setItem('historicalData', historySaved)
  } catch {}
}

export function usePersistedHistory(onLoad: (arg0: string) => void) {
  const [history, setHistory] = React.useState<string>()

  const loadedRef = React.useRef(false)

  // eslint-disable-next-line react-hooks/exhaustive-deps
  React.useEffect(() => {
    if (loadedRef.current) {
      return
    }
    loadedRef.current = true
    const savedHistory = loadHistory()
    if (savedHistory) {
      setHistory(savedHistory)
      onLoad(savedHistory)
    }
  })

  React.useEffect(() => {
    saveHistory(history)
  }, [history])

  return [history, setHistory]
}
