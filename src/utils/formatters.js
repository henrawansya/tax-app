// Format mata uang
export function formatCurrency(amount, currency = 'IDR') {
  const formatter = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: currency,
  })
  return formatter.format(amount)
}

// Format tanggal
export function formatDate(date, locale = 'id-ID') {
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }
  return new Date(date).toLocaleDateString(locale, options)
}

// Format waktu
export function formatTime(time) {
  const [hours, minutes] = time.split(':')
  return `${hours}:${minutes}`
}

// Format jarak
export function formatDistance(km) {
  if (km < 1) {
    return `${Math.round(km * 1000)} m`
  }
  return `${km.toFixed(1)} km`
}

// Format rating
export function formatRating(rating) {
  return `⭐ ${rating.toFixed(1)}`
}
