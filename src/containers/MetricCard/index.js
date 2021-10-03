import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'
import { Button } from 'antd'
import { EditOutlined } from '@ant-design/icons'

import { formatMetricValues } from '../../utils'
import { useMetricValues } from '../../hooks/useMetricValues'
import { useDeleteMetric } from '../../hooks/useDeleteMetric'

import MetricChart from '../../components/MetricChart'
import DeleteButton from '../../components/DeleteButton'

const MetricCard = ({ metric }) => {
  const history = useHistory()
  const { data: metricValuesData, ...metricValues } = useMetricValues(metric.id)
  const deleteMetric = useDeleteMetric()
  const metricData = useMemo(
    () => formatMetricValues(metricValuesData?.data?.list),
    [metricValuesData?.data?.list]
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
          <DeleteButton onDelete={handleDelete} />
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
