import { useMutation, useQueryClient } from 'react-query'
import { notification } from 'antd'

import { createMetric } from '../api'
import { queryKey as metricsQueryKey } from './useMetrics'

export const useCreateMetric = () => {
  const queryClient = useQueryClient()

  return useMutation(data => createMetric(data), {
    onSuccess: () => {
      notification.success({
        message: 'Metric successfully created.'
      })
      queryClient.invalidateQueries(metricsQueryKey)
    },
    onError: ({ response }) => {
      notification.error({
        message: 'Metric not created.',
        description: response.data.error
      })
    }
  })
}
