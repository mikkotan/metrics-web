import React from 'react'

import MetricGrid from '../../components/MetricGrid'
import MetricCard from '../MetricCard'
import { useMetrics } from './hooks/useMetrics'

const MetricList = () => {
  const metrics = useMetrics()

  if (metrics.isLoading) {
    return <div>Loading...</div>
  }

  return (
    <MetricGrid>
      {metrics.data.map(metric => (
        <MetricCard metric={metric} />
      ))}
    </MetricGrid>
  )
}

export default MetricList
