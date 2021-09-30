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

export const dateFilterOptions = {
  TODAY: 'today',
  THIS_WEEK: 'this_week',
  THIS_MONTH: 'this_month',
  LAST_7_DAYS: 'last_7_days',
  LAST_30_DAYS: 'last_30_days'
}

export const filterToDateRange = {
  [dateFilterOptions.TODAY]: () => {
    return {
      from: dayjs().startOf('day').format(),
      to: dayjs().endOf('day').format()
    }
  },
  [dateFilterOptions.THIS_WEEK]: () => {
    return {
      from: dayjs().startOf('week').format(),
      to: dayjs().endOf('week').format()
    }
  },
  [dateFilterOptions.THIS_MONTH]: () => {
    return {
      from: dayjs().startOf('month').format(),
      to: dayjs().endOf('month').format()
    }
  },
  [dateFilterOptions.LAST_7_DAYS]: () => {
    return {
      from: dayjs().subtract(7, 'day').format(),
      to: dayjs().endOf('day').format()
    }
  },
  [dateFilterOptions.LAST_30_DAYS]: () => {
    return {
      from: dayjs().subtract(30, 'day').format(),
      to: dayjs().endOf('day').format()
    }
  }
}
