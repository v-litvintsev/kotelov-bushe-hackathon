import { Avatar, Button, Card, Col, Row, Space } from 'antd'
import { observer } from 'mobx-react-lite'
import { useState } from 'react'
import appState from '../../store/appState'
import MenuMobile from './components/MenuMobile'
import './Homepage.scss'

const Homepage = (props: any) => {
  const [accepted, setAccepted] = useState(false)
  const [expandedCardOrder, setExpandedCardOrder] = useState(-1)

  const orders = appState.getOrders()

  const handleAccept = () => {
    setAccepted(true)
  }

  const handleExpandCard = (expandOrderId: number) => {
    setExpandedCardOrder(expandOrderId)
  }


  const handleFinishOrder = (id: number) => {
    appState.finishOrder(id).then((res) => {
      if (res === 1) console.log(`Homepage.tsx - line: 25 ->> order ${id} delivered`)
      else console.log(`Homepage.tsx - line: 26 ->> order not found`, )
    })
  }


  const ordersTotalWeight = orders.reduce((acc, val) => {
    return (
      acc + val.content.map((el) => el.weight).reduce((acc, val) => acc + val)
    )
  }, 0)

  const ordersTotalCost = orders.reduce((acc, val) => {
    return (
      acc + val.content.map((el) => el.cost).reduce((acc, val) => acc + val)
    )
  }, 0)

  const MathRound = (number: number) => {
    return (Math.round(number * 100) / 100).toFixed(2)
  }

  const individualOrderCost = (order: (typeof appState.orders)[0]) =>
    MathRound(
      order.content.map((el) => el.cost).reduce((acc, val) => acc + val),
    )

  const individualOrderWeight = (order: (typeof appState.orders)[0]) =>
    MathRound(
      order.content.map((el) => el.weight).reduce((acc, val) => acc + val),
    )

  return (
    <div className="homepage">
      <div className="container">
        <header className="header">
          <div className="header__wrapper">
            <div className="profile">
              <div className="profile__icon"></div>
              <Avatar
                className="round-button"
                shape="circle"
                gap={4}
                size="large"
              />
              <div className="profile__name">
                <h3 className="profile__text">Привет, Влад!</h3>
              </div>
            </div>
            <MenuMobile />
          </div>
        </header>

        <div className="content">
          {!accepted && (
            <Card
              style={{
                width: 300,
                backgroundColor: '#D9D9D9',
                borderRadius: 8,
              }}
            >
              <p>№ 24798</p>
              <h2>Новая группа заказов</h2>
              <Row justify="start" align="middle">
                <p style={{}}>{orders.length} адресов</p>
                <p style={{ marginLeft: 16 }}>{orders.length} адресов</p>
              </Row>
              <Row justify="start" align="middle">
                <p style={{}}>Дано времени: 2 часа 30 минут</p>
              </Row>
              <Row justify="start" align="middle">
                <p>Общий вес: {MathRound(ordersTotalWeight)} кг</p>
              </Row>
              <Row justify="start" align="middle">
                <p>Общая стоимость: {MathRound(ordersTotalCost)}₽</p>
              </Row>
              <Button onClick={handleAccept}>Да</Button>
            </Card>
          )}
          {accepted && (
            <>
              {orders.map((order, idx) => {
                return (
                 <>
                    <Card
                      style={{
                        width: 300,
                        backgroundColor: order.status === 0 ? '#D9D9D9' : '#efefef',
                        borderRadius: 8,
                        marginBottom: 8,
                      }}
                      key={order.id}
                      bodyStyle={{ padding: '4px 8px 4px' }}
                      className="homepage__card-collapsed"
                      onClick={() => handleExpandCard(order.id)}
                    >
                      {!(expandedCardOrder === order.id) && (
                        <Row justify="start" align="middle">
                          <h3 style={{ margin: '0 16px 0 0' }}>{idx + 1}</h3>
                          <h3 style={{ marginBottom: 0 }}>
                            {order.addresses.start}
                          </h3>
                        </Row>
                      )}
  
                      {expandedCardOrder === order.id && (
                        <>
                          <Row justify="start" align="middle">
                            <p style={{}}>Нынешний пункт</p>
                            <p style={{ marginLeft: 16 }}>до {order.deliverTo}</p>
                          </Row>
                          <Row justify="space-between" align="middle">
                            <Col span={18}>
                              <h3>{order.addresses.start}</h3>
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
                          <Row
                            justify="start"
                            align="middle"
                            style={{ height: 65 }}
                          >
                            <p style={{}}>{order.customer.name}</p>
                            <p style={{}}>{order.customer.phone}</p>
                          </Row>
  
                          <Row justify="space-between" align="middle">
                            <Col span={10}>
                              <p>В заказе</p>
                            </Col>
                            <Col span={4}>
                              <p>{individualOrderCost(order)} Р</p>
                            </Col>
                            <Col span={4}>
                              <p>{individualOrderWeight(order)} кг</p>
                            </Col>
                          </Row>
  
                          {order.content.map((content, idx) => {
                            return (
                              <div key={idx + content.name}>
                                <Row justify="space-between" align="middle">
                                  <Col span={10}>
                                    <p>{content.name}</p>
                                  </Col>
                                  <Col span={4}>
                                    <p>{content.cost} Р</p>
                                  </Col>
                                  <Col span={4}>
                                    <p>{content.weight} кг.</p>
                                  </Col>
                                </Row>
                              </div>
                            )
                          })}
                           <Button disabled={order.status === 1} onClick={() => handleFinishOrder(order.id)}>Завершить</Button>
                        </>
                      )}
                    </Card>
                 </>
                )
              })}
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default observer(Homepage)
