import { useMutation, useQueryClient } from 'react-query'
import { notification } from 'antd'

import { createMetricValue } from '../api'
import { queryKey } from './useMetricValues'

export const useCreateMetricValue = (metricId) => {
  const queryClient = useQueryClient()

  return useMutation(data => createMetricValue({ metricId, ...data }), {
    onSuccess: () => {
      notification.success({ message: 'Metric value successfully created.' })
      queryClient.invalidateQueries([queryKey, metricId])
    }
  })
}
