import React from 'react'
import PropTypes from 'prop-types'
import dayjs from 'dayjs'
import { Button } from 'antd'
import { EditOutlined, DeleteOutlined } from '@ant-design/icons'

import { useMetricValues } from '../../hooks/useMetricValues'
import MetricChart from '../../components/MetricChart'

const MetricCard = ({ metric }) => {
  const metricValues = useMetricValues(metric.id)

  if (metricValues.isLoading) {
    return <div>Loading...</div>
  }

  const metricData = metricValues.data.map(metricValue => (
    {
      ...metricValue,
      formattedTimestamp: dayjs(metricValue.timestamp).format('M/D/YY HH:mm')
    }
  ))

  return (
    <MetricChart
      title={metric.name}
      data={metricData}
      actionButtons={
        <>
          <Button type="primary" size="small" icon={<EditOutlined />} />{' '}
          <Button size="small" danger={true} icon={<DeleteOutlined />} />
        </>
      }
    />
  )
}

MetricCard.propTypes = {
  metric: PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
  }).isRequired
}

export default MetricCard
