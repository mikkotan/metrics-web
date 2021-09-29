import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Row, Col, Card, Statistic } from 'antd'

const PaddedRow = styled(Row)`
  padding: 0 16px;
`

const AverageDetails = ({ perMinuteValue, perHourValue, perDayValue }) => {
  return (
    <PaddedRow gutter={16}>
      <Col span={8}>
        <Card>
          <Statistic
            title="Every minute"
            value={perMinuteValue}
            precision={6}
            suffix="/ min"
          />
        </Card>
      </Col>
      <Col span={8}>
        <Card>
          <Statistic
            title="Hourly"
            value={perHourValue}
            precision={2}
            suffix="/ hour"
          />
        </Card>
      </Col>
      <Col span={8}>
        <Card>
          <Statistic
            title="Daily"
            value={perDayValue}
            precision={2}
            suffix="/ day"
          />
        </Card>
      </Col>
    </PaddedRow>
  )
}

AverageDetails.propTypes = {
  perMinuteValue: PropTypes.number,
  perHourValue: PropTypes.number,
  perDayValue: PropTypes.number
}

AverageDetails.defaultProps = {
  perMinuteValue: 0,
  perHourValue: 0,
  perDayValue: 0
}

export default AverageDetails
