import { useMutation, useQueryClient } from 'react-query'
import { notification } from 'antd'

import { deleteMetric } from '../api'
import { queryKey as metricsQueryKey } from './useMetrics'

export const useDeleteMetric = () => {
  const queryClient = useQueryClient()

  return useMutation(id => deleteMetric(id), {
    onSuccess: () => {
      notification.info({ message: 'Metric successfully deleted.' })
      queryClient.invalidateQueries(metricsQueryKey)
    }
  })
}
