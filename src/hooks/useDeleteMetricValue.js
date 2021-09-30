import { useMutation, useQueryClient } from 'react-query'

import { deleteMetricValue } from '../api'
import { queryKey } from './useMetricValues'

export const useDeleteMetricValue = metricId => {
  const queryClient = useQueryClient()

  return useMutation(id => deleteMetricValue({ metricId, id }), {
    onSuccess: () => queryClient.invalidateQueries([queryKey, metricId])
  })
}
