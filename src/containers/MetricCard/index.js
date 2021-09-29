import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import dayjs from 'dayjs'
import { Button, Popconfirm } from 'antd'
import { EditOutlined, DeleteOutlined, QuestionCircleOutlined } from '@ant-design/icons'

import { useMetricValues } from '../../hooks/useMetricValues'
import { useDeleteMetric } from '../../hooks/useDeleteMetric'
import MetricChart from '../../components/MetricChart'

const StyledQuestionIcon = styled(QuestionCircleOutlined)`
  color: 'red';
`

const MetricCard = ({ metric }) => {
  const metricValues = useMetricValues(metric.id)
  const deleteMetric = useDeleteMetric()

  if (metricValues.isLoading) {
    return <div>Loading...</div>
  }

  const metricData = metricValues.data.map(metricValue => (
    {
      ...metricValue,
      formattedTimestamp: dayjs(metricValue.timestamp).format('M/D/YY HH:mm')
    }
  ))

  const handleDelete = () => {
    deleteMetric.mutate(metric.id)
  }

  return (
    <MetricChart
      title={metric.name}
      data={metricData}
      actionButtons={
        <>
          <Button type="primary" size="small" icon={<EditOutlined />} />{' '}
          <Popconfirm
            title="Are you sure？"
            icon={<StyledQuestionIcon />}
            onConfirm={handleDelete}
          >
            <Button size="small" danger={true} icon={<DeleteOutlined />} />
          </Popconfirm>
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
