import React from 'react'

import { useMetrics } from '../../hooks/useMetrics'
import MetricGrid from '../../components/MetricGrid'
import AddMetricButton from '../../components/AddMetricButton'
import MetricCard from '../MetricCard'

const MetricList = () => {
  const metrics = useMetrics()

  if (metrics.isLoading) {
    return <div>Loading...</div>
  }

  return (
    <React.Fragment>
      <MetricGrid>
        {
          [
            <AddMetricButton onClick={() => alert('Add metric')}/>,
            ...metrics.data.map(metric => (
            <MetricCard metric={metric} />
            ))
          ]
        }
      </MetricGrid>
    </React.Fragment>
  )
}

export default MetricList
