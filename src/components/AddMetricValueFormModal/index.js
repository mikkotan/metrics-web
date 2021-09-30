import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Modal, Form, InputNumber, DatePicker } from 'antd'

const AddMetricValueFormModal = ({
  visible,
  onCancel,
  onSubmit,
  confirmLoading
}) => {
  const [value, setValue] = useState(0)
  const [timestamp, setTimeStamp] = useState('')

  const handleSubmit = () => {
    onSubmit({ value, timestamp })
    setValue(0)
    setTimeStamp('')
  }

  return (
    <Modal
      title="Add Metric Value"
      visible={visible}
      onCancel={onCancel}
      onOk={handleSubmit}
      confirmLoading={confirmLoading}
      okText="Save"
    >
      <Form.Item label="Value">
        <InputNumber
          value={value}
          onChange={value => setValue(value)}
        />
      </Form.Item>
      <Form.Item label="Timestamp">
        <DatePicker showTime value={timestamp} onOk={value => setTimeStamp(value)} />
      </Form.Item>
    </Modal>
  )
}

AddMetricValueFormModal.propTypes = {
  visible: PropTypes.bool,
  confirmLoading: PropTypes.bool,
  onCancel: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
}

AddMetricValueFormModal.defaultProps = {
  visible: false
}

export default AddMetricValueFormModal
