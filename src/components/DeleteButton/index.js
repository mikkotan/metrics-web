import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Button, Popconfirm } from 'antd'
import { DeleteOutlined, QuestionCircleOutlined } from '@ant-design/icons'

const StyledQuestionIcon = styled(QuestionCircleOutlined)`
  color: 'red';
`

const DeleteButton = ({ onDelete }) => {
  return (
    <Popconfirm
      title="Are you sure？"
      icon={<StyledQuestionIcon />}
      onConfirm={onDelete}
    >
      <Button size="small" danger={true} icon={<DeleteOutlined />} />
    </Popconfirm>
  )
}

DeleteButton.propTypes = {
  onDelete: PropTypes.func.isRequired
}

export default DeleteButton
