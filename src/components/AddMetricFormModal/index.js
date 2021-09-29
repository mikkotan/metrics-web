import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Modal, Form, Input } from 'antd'

const AddMetricFormModal = ({
  visible,
  onCancel,
  onSubmit,
  confirmLoading
}) => {
  const [name, setName] = useState('')

  const handleSubmit = () => {
    onSubmit({ name })
  }

  return (
    <Modal
      title="Add New Metric"
      visible={visible}
      onCancel={onCancel}
      onOk={handleSubmit}
      confirmLoading={confirmLoading}
      okText="Save"
    >
      <Form.Item label="Name">
        <Input
          placeholder="eg. Retention Rate, Performance, etc."
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </Form.Item>
    </Modal>
  )
}

AddMetricFormModal.propTypes = {
  visible: PropTypes.bool,
  confirmLoading: PropTypes.bool,
  onCancel: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
}

AddMetricFormModal.defaultProps = {
  visible: false
}

export default AddMetricFormModal