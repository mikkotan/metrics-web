import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import { Button, Popconfirm } from 'antd'
import { EditOutlined, DeleteOutlined, QuestionCircleOutlined } from '@ant-design/icons'

import { formatTimestamp } from '../../utils'
import { useMetricValues } from '../../hooks/useMetricValues'
import { useDeleteMetric } from '../../hooks/useDeleteMetric'
import MetricChart from '../../components/MetricChart'

const StyledQuestionIcon = styled(QuestionCircleOutlined)`
  color: 'red';
`

const MetricCard = ({ metric }) => {
  const history = useHistory()
  const { data: metricValuesData, ...metricValues } = useMetricValues(metric.id)
  const deleteMetric = useDeleteMetric()
  const metricData = useMemo(
    () => formatTimestamp(metricValuesData),
    [metricValuesData]
  )

  if (metricValues.isLoading) {
    return <div>Loading...</div>
  }

  const handleDelete = () => {
    deleteMetric.mutate(metric.id)
  }

  const navigateToDetail = () => {
    history.push(`/metrics/${metric.id}`)
  }

  return (
    <MetricChart
      title={metric.name}
      data={metricData}
      actionButtons={
        <>
          <Button
            type="primary"
            size="small"
            icon={<EditOutlined />}
            onClick={navigateToDetail}
          />
          {' '}
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
