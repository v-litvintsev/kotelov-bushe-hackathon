import {
  Avatar,
  Button, Card, Col, Row
} from 'antd'
import { observer } from 'mobx-react-lite'
import { useState } from 'react'
import appState from '../../store/appState'
import MenuMobile from './components/MenuMobile'
import './Homepage.scss'

const Homepage = (props: any) => {
  const [accepted, setAccepted] = useState(false)

  const orders = appState.getOrders()


  const handleAccept = () => {
    setAccepted(true)
  }

  const ordersTotalWeight = (orders.reduce((acc, val) => {
    return acc + val.content.map(el => el.weight).reduce((acc,val) => acc + val)
  }, 0))
  
  const ordersTotalCost = (orders.reduce((acc, val) => {
    return acc + val.content.map(el => el.cost).reduce((acc,val) => acc + val)
  }, 0))
  


  const MathRound = (number: number) => {
    return (Math.round(number * 100) / 100).toFixed(2);
  }

  return (
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
            style={{ width: 300, backgroundColor: '#D9D9D9', borderRadius: 8 }}
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
              <p>Общая стоимость: { MathRound(ordersTotalCost)}₽</p>
            </Row>
            <Button onClick={handleAccept}>Да</Button>
          </Card>
        )}
        {accepted && (
          <>
            <h2>Заказ №24798 в работе</h2>
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
              <Row justify="start" align="middle" style={{height: 65}}>
                <p style={{}}>Order details</p>
              </Row>
              <Button onClick={handleAccept}>Завершить</Button>
            </Card>
          </>
        )}
      </div>
    </div>
  )
}

export default observer(Homepage)
