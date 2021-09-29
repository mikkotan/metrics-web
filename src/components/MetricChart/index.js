import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Typography } from 'antd'
import { Line } from '@ant-design/charts'

import Card from '../Card'

const LineWrapper = styled(Line)`
  margin-top: 24px;
`

const MetricChart = ({ title, data, width }) => {
  const config = {
    data,
    width,
    xField: 'formattedTimestamp',
    yField: 'value'
  }

  return (
    <Card>
      <Typography.Title level={5}>{title}</Typography.Title>
      <LineWrapper {...config} />
    </Card>
  )
}

MetricChart.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(PropTypes.any).isRequired,
  width: PropTypes.number,
}

MetricChart.defaultProps = {
  width: 240
}

export default MetricChart