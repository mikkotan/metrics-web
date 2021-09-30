import React, { useMemo, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { formatTimestamp } from '../../utils'
import { dateFilterOptions } from '../../utils'
import { useMetricValues } from '../../hooks/useMetricValues'
import { useDeleteMetricValue } from '../../hooks/useDeleteMetricValue'

import AverageDetails from '../../components/AverageDetails'
import DateFilter from '../../components/DateFilter'
import MetricChart from '../../components/MetricChart'
import MetricValuesTable from '../../components/MetricValuesTable'
import AddMetricValue from '../AddMetricValue'

const Container = styled.div`
  padding-top: 16px;

  .filter {
    margin: 16px;

    .select {
      width: 200px;
    }
  }
`

const MetricDetail = ({ metricId, name }) => {
  const [filter, setFilter] = useState(dateFilterOptions.LAST_7_DAYS)
  const {
    data: metricValuesData,
    refetch, ...metricValues
  } = useMetricValues(
    metricId,
    filter
  )
  const deleteMetricValue = useDeleteMetricValue(metricId)

  const formattedData = useMemo(
    () => formatTimestamp(metricValuesData),
    [metricValuesData]
  )

  useEffect(() => {
    if (filter) {
      refetch()
    }
  }, [filter, refetch])

  if (metricValues.isLoading) {
    return <div>Loading...</div>
  }

  const handleDelete = id => {
    deleteMetricValue.mutate(id)
  }

  return (
    <Container>
      <DateFilter value={filter} onChange={value => setFilter(value)} />
      <AverageDetails
        perMinuteValue={0.00228}
        perHourValue={0.01952}
        perDayValue={3.28}
      />
      <MetricChart title={name} data={formattedData} />
      <MetricValuesTable
        values={formattedData}
        onDelete={handleDelete}
        actionButton={
          <AddMetricValue metricId={metricId} filter={filter}/>
        }
      />
    </Container>
  )
}

MetricDetail.propTypes = {
  metricId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
}

export default MetricDetail
