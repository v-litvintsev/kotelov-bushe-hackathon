import {
  Avatar,
  Button, Card, Col, Row
} from 'antd'
import { observer } from 'mobx-react-lite'
import { useState } from 'react'

import '../Homepage.scss'

const ExpandedCardOrder = () => {
  return (
    <>
      <h2>Заказ № {1} в работе</h2>
      <Card
        style={{
          width: 300,
          backgroundColor: '#D9D9D9',
          borderRadius: 8,
        }}
      >
        <Row justify="start" align="middle">
          <p style={{}}>Нынешний пункт</p>
          <p style={{ marginLeft: 16 }}>до 13:30</p>
        </Row>
        <Row justify="space-between" align="middle">
          <Col span={18}>
            <h3>ул. Пушкина, 47 к.2, кв. 49</h3>
          </Col>
          <Col span={4}>
            <Avatar
              className="round-button"
              shape="circle"
              gap={4}
              size="large"
              style={{ backgroundColor: 'white' }}
            />
          </Col>
        </Row>
        <Row justify="start" align="middle" style={{ height: 65 }}>
          <p style={{}}>Order details</p>
        </Row>
        <Button onClick={() => {}}>Завершить</Button>
      </Card>
    </>
  )
}
export default ExpandedCardOrder
