import React, { useMemo, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { formatMetricValues } from '../../utils'
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
    refetch,
    ...metricValues
  } = useMetricValues(
    metricId,
    filter
  )
  const deleteMetricValue = useDeleteMetricValue(metricId)

  const formattedData = useMemo(
    () => formatMetricValues(metricValuesData?.data?.list),
    [metricValuesData?.data?.list]
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

  const {
    average: {
      per_minute: perMinute,
      per_hour: perHour,
      per_day: perDay,
    }
  } = metricValuesData.data

  return (
    <Container>
      <DateFilter value={filter} onChange={value => setFilter(value)} />
      <AverageDetails
        perMinuteValue={Number(perMinute)}
        perHourValue={Number(perHour)}
        perDayValue={Number(perDay)}
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
