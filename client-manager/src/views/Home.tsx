import { Progress, Radio, RadioChangeEvent } from 'antd'
import { FC, useState } from 'react'
import { HomeOrdersList } from '../components/HomeOrders'
import appState from '../store/appState'
import { HomeEdit } from '../components/HomeEdit'

export const Home: FC = () => {
  const [activeTab, setActiveTab] = useState<'history' | 'edit'>('history')

  const handleTabChange = (e: RadioChangeEvent) => {
    setActiveTab(e.target.value)
  }

  return (
    <div style={{ padding: '20px 50px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Radio.Group
          onChange={handleTabChange}
          value={activeTab}
          style={{ marginBottom: 8 }}
        >
          <Radio.Button value="history">История заказов</Radio.Button>
          <Radio.Button value="edit">Смена</Radio.Button>
        </Radio.Group>
        <div style={{ width: 300 }}>
          <Progress
            percent={appState.data.currentCouriersTraffic.percentage}
            trailColor="#fff"
          />
          <p>
            {appState.data.currentCouriersTraffic.currentCount} /{' '}
            {appState.data.currentCouriersTraffic.maxCount} заказов в час
          </p>
        </div>
      </div>
      <div>
        {activeTab === 'history' && <HomeOrdersList />}
        {activeTab === 'edit' && <HomeEdit />}
      </div>
    </div>
  )
}
