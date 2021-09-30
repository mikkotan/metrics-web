import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Space, Select, Typography } from 'antd'

import { dateFilterOptions } from '../../utils'

const Filter = styled(Space)`
  margin: 16px;

  .select {
    width: 180px;
  }
`

const { Option } = Select
const {
  TODAY,
  THIS_WEEK,
  THIS_MONTH,
  LAST_7_DAYS,
  LAST_30_DAYS
} = dateFilterOptions

const options = [
  { label: 'Today', value: TODAY },
  { label: 'This week', value: THIS_WEEK },
  { label: 'This month', value: THIS_MONTH },
  { label: 'Last 7 days', value: LAST_7_DAYS },
  { label: 'Last 30 days', value: LAST_30_DAYS }
]

const DateFilter = ({ value, onChange }) => {

  return (
    <Filter>
      <Typography.Text>Filter by date:</Typography.Text>
      <Select className="select" value={value} onChange={onChange}>
        {options.map(({ label, value }) => (
          <Option key={value} value={value}>{label}</Option>
        ))}
      </Select>
    </Filter>
  )
}

DateFilter.propTypes = {
  value: PropTypes.oneOf([
    TODAY,
    THIS_WEEK,
    THIS_MONTH,
    LAST_7_DAYS,
    LAST_30_DAYS
  ]),
  onChange: PropTypes.func.isRequired
}

DateFilter.defaultProps = {
  value: LAST_7_DAYS
}

export default DateFilter
