import React from 'react'
import { Typography } from 'antd'

import AppLayout from '../../components/Layout'
import MetricList from '../../containers/MetricList'

const Overview = () => {
  return (
    <AppLayout>
      <Typography.Title level={3}>
        Overview
      </Typography.Title>
      <MetricList />
    </AppLayout>
  )
}

export default Overview
