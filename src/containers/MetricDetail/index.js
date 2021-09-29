import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { formatTimestamp } from '../../utils'
import { useMetricValues } from '../../hooks/useMetricValues'

import AverageDetails from '../../components/AverageDetails'
import MetricChart from '../../components/MetricChart'

const Container = styled.div`
  padding-top: 16px;
`

const MetricDetail = ({ metricId, name }) => {
  const { data: metricValuesData, ...metricValues } = useMetricValues(metricId)
  const formattedData = useMemo(
    () => formatTimestamp(metricValuesData),
    [metricValuesData]
  )

  if (metricValues.isLoading) {
    return <div>Loading...</div>
  }

  return (
    <Container>
      <AverageDetails
        perMinuteValue={0.00228}
        perHourValue={0.01952}
        perDayValue={3.28}
      />
      <MetricChart title={name} data={formattedData} />
    </Container>
  )
}

MetricDetail.propTypes = {
  metricId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
}

export default MetricDetail
