import dayjs from 'dayjs'

export const baseUrl = process.env.REACT_APP_API_BASE_URL

export const headers = {
  'Content-Type': 'application/json'
}

export const formatTimestamp = metricValues => (
  (metricValues || []).map(metricValue => (
    {
      ...metricValue,
      formattedTimestamp: dayjs(metricValue.timestamp).format('M/D/YY HH:mm')
    }
  ))
)