import { useMutation, useQueryClient } from 'react-query'

import { deleteMetric } from '../api'
import { queryKey as metricsQueryKey } from './useMetrics'

export const useDeleteMetric = () => {
  const queryClient = useQueryClient()

  return useMutation(id => deleteMetric(id), {
    onSuccess: () => queryClient.invalidateQueries(metricsQueryKey)
  })
}
