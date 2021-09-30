import { useMutation, useQueryClient } from 'react-query'

import { createMetricValue } from '../api'
import { queryKey } from './useMetricValues'

export const useCreateMetricValue = (metricId) => {
  const queryClient = useQueryClient()

  return useMutation(data => createMetricValue({ metricId, ...data }), {
    onSuccess: () => queryClient.invalidateQueries([queryKey, metricId])
  })
}
