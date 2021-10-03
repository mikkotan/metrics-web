import { useMutation, useQueryClient } from 'react-query'
import { notification } from 'antd'
import { deleteMetricValue } from '../api'
import { queryKey } from './useMetricValues'

export const useDeleteMetricValue = metricId => {
  const queryClient = useQueryClient()

  return useMutation(id => deleteMetricValue({ metricId, id }), {
    onSuccess: () => {
      notification.info({ message: 'Metric value successfully deleted.' })
      queryClient.invalidateQueries([queryKey, metricId])
    }
  })
}
