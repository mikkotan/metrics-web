import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { Typography, Breadcrumb } from 'antd'

import { useMetric } from '../../hooks/useMetric'
import AppLayout from '../../components/Layout'
import MetricDetail from '../../containers/MetricDetail'

const Metric = () => {
  const { id } = useParams()
  const { data: metricData, ...metric} = useMetric(id)

  if (metric.isLoading) {
    return <div>Loading...</div>
  }

  const { name } = metricData?.data

  return (
    <AppLayout>
      <Typography.Title level={3}>
        Metric Details
      </Typography.Title>
      <Breadcrumb>
        <Breadcrumb.Item>
          <Link to="/" >Overview</Link>
        </Breadcrumb.Item>
        {name && <Breadcrumb.Item>{name}</Breadcrumb.Item>}
      </Breadcrumb>
      <MetricDetail name={name} metricId={id} />
    </AppLayout>
  )
}

export default Metric
