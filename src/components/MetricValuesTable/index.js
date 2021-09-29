import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Typography, Space, Table } from 'antd'

import DeleteButton from '../DeleteButton'

const Container = styled.div`
  padding: 16px;
`

const MetricValuesTable = ({ values, onDelete }) => {
  const columns = [
    {
      title: 'Timestamp',
      dataIndex: 'formattedTimestamp',
      key: 'formattedTimestamp'
    },
    {
      title: 'Value',
      dataIndex: 'value',
      key: 'value'
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
          <DeleteButton onDelete={() => onDelete(record.id)} />
        </Space>
      )
    }
  ]

  const dataSource = useMemo(
    () => (
      values.map(value => (
        {
          ...value,
          key: value.id
        }
      ))
    ),
    [values]
  )

  return (
    <Container>
      <Typography.Title level={5}>Metric Data</Typography.Title>
      <Table columns={columns} dataSource={dataSource} pagination={false} />
    </Container>
  )
}

MetricValuesTable.propTypes = {
  values: PropTypes.arrayOf(PropTypes.object),
  onDelete: PropTypes.func.isRequired
}

export default MetricValuesTable
