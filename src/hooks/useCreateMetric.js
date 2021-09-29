import { useMutation, useQueryClient } from 'react-query'

import { createMetric } from '../api'
import { queryKey as metricsQueryKey } from './useMetrics'

export const useCreateMetric = () => {
  const queryClient = useQueryClient()

  return useMutation(data => createMetric(data), {
    onSuccess: () => queryClient.invalidateQueries(metricsQueryKey)
  })
}
