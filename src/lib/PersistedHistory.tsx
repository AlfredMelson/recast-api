import { useEffect, useRef, useState } from 'react'

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
  const [history, setHistory] = useState<string>()

  const loadedRef = useRef(false)

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
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

  useEffect(() => {
    saveHistory(history)
  }, [history])

  return [history, setHistory]
}
