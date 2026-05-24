import { useState, useEffect } from 'react'

export default function Alert({ type = 'info', message, onClose, duration = 3000 }) {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
      onClose?.()
    }, duration)

    return () => clearTimeout(timer)
  }, [])

  if (!isVisible) return null

  const colors = {
    success: 'bg-green-100 border-green-400 text-green-700',
    error: 'bg-red-100 border-red-400 text-red-700',
    warning: 'bg-yellow-100 border-yellow-400 text-yellow-700',
    info: 'bg-blue-100 border-blue-400 text-blue-700',
  }

  const icons = {
    success: '✓',
    error: '✕',
    warning: '⚠',
    info: 'ℹ',
  }

  return (
    <div className={`border-l-4 p-4 rounded mb-4 ${colors[type]}`}>
      <div className="flex items-center gap-3">
        <span className="text-xl font-bold">{icons[type]}</span>
        <p>{message}</p>
      </div>
    </div>
  )
}
