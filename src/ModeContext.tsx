import { createContext, useContext, useState, useCallback, useEffect } from 'react'
import type { ReactNode } from 'react'

export type Mode = 'clinique' | 'surveillance' | 'interference'

const STORAGE_KEY = 'abysso_mode'

interface ModeContextValue {
  mode: Mode
  setMode: (m: Mode) => void
}

const ModeContext = createContext<ModeContextValue | null>(null)

function readStoredMode(): Mode | null {
  try {
    const v = localStorage.getItem(STORAGE_KEY)
    if (v === 'clinique' || v === 'surveillance' || v === 'interference') return v
  } catch {
    /* localStorage indisponible (navigation privée, etc.) */
  }
  return null
}

export function ModeProvider({ children }: { children: ReactNode }) {
  const [mode, setModeState] = useState<Mode>(() => readStoredMode() ?? 'surveillance')

  const setMode = useCallback((m: Mode) => {
    setModeState(m)
    try { localStorage.setItem(STORAGE_KEY, m) } catch { /* noop */ }
  }, [])

  useEffect(() => {
    document.body.dataset.mode = mode
  }, [mode])

  return (
    <ModeContext.Provider value={{ mode, setMode }}>
      {children}
    </ModeContext.Provider>
  )
}

export function useMode(): ModeContextValue {
  const ctx = useContext(ModeContext)
  if (!ctx) throw new Error('useMode doit être utilisé dans un <ModeProvider>')
  return ctx
}
