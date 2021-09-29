import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Layout as AntdLayout } from 'antd'

const Logo = styled.div`
  font-size: 24px;
  font-family: monospace;
  font-weight: 700;
  color: #ffff;
`
const Content = styled(AntdLayout.Content)`
  padding: 50px;
  background: #ffff;
`

const Layout = ({ children }) => {
  return (
    <AntdLayout>
      <AntdLayout.Header>
        <Logo>Metriq</Logo>
      </AntdLayout.Header>
      <Content>
        {children}
      </Content>
    </AntdLayout>
  )
}

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}

export default Layout
