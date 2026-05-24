import { useState, useEffect } from 'react'

export function useFetch(url, options = {}) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        // Simulasi fetch dengan delay
        await new Promise((resolve) => setTimeout(resolve, 500))
        // Dalam production, ganti dengan fetch(url) atau axios
        setData({ success: true })
        setError(null)
      } catch (err) {
        setError(err.message)
        setData(null)
      } finally {
        setLoading(false)
      }
    }

    if (url) {
      fetchData()
    }
  }, [url])

  return { data, loading, error }
}
