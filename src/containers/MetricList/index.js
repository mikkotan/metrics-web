import React from 'react'

import { useMetrics } from '../../hooks/useMetrics'
import MetricGrid from '../../components/MetricGrid'
import AddMetric from '../AddMetric'
import MetricCard from '../MetricCard'

const MetricList = () => {
  const { data: metricsData, ...metrics } = useMetrics()

  if (metrics.isLoading) {
    return <div>Loading...</div>
  }

  return (
    <React.Fragment>
      <MetricGrid>
        {
          [
            <AddMetric key={0} />,
            ...metricsData.data.map(metric => (
            <MetricCard metric={metric} key={metric.id} />
            ))
          ]
        }
      </MetricGrid>
    </React.Fragment>
  )
}

export default MetricList
