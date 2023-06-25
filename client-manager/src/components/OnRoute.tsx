import { useEffect, FC } from 'react'
import {
  MapContainer,
  Marker,
  Polygon,
  Popup,
  TileLayer,
  Tooltip,
} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css'
import { LatLngExpression } from 'leaflet'
import 'leaflet-routing-machine'
import { Button, Card, Col, Divider, Input, Row, Space } from 'antd'
import appState from '../store/appState'
import { AudioOutlined } from '@ant-design/icons'
import L from 'leaflet'
import ReactDOMServer from 'react-dom/server'

const LARGE_ZONE_POLYGON: LatLngExpression[] = [
  [59.928411, 30.274907],
  [59.931409, 30.281078],
  [59.935157, 30.29632],
  [59.945966, 30.327086],
  [59.950374, 30.348072],
  [59.950331, 30.368458],
  [59.956488, 30.387076],
  [59.95107, 30.399769],
  [59.93918, 30.397189],
  [59.930178, 30.389835],
  [59.920344, 30.396107],
  [59.914266, 30.365602],
  [59.913857, 30.360256],
  [59.905477, 30.354269],
  [59.907661, 30.345792],
  [59.898215, 30.337079],
  [59.88919, 30.302522],
  [59.882552, 30.300488],
  [59.881882, 30.293287],
  [59.88049, 30.288896],
  [59.885801, 30.26068],
  [59.892895, 30.247697],
  [59.894253, 30.243729],
  [59.89908, 30.247028],
  [59.903041, 30.25482],
  [59.915873, 30.263426],
  [59.92238, 30.271074],
]

const SMALL_ZONE_POLYGON: LatLngExpression[] = [
  [59.930813, 30.360679],
  [59.915282, 30.350087],
  [59.916158, 30.343032],
  [59.908762, 30.320679],
  [59.909177, 30.275544],
  [59.924165, 30.285449],
  [59.935319, 30.326773],
]

const LOAD_ZONES: Array<{ position: [number, number]; load: number }> = [
  { position: [59.930498, 30.331492], load: 90 },
  { position: [59.928894, 30.310953], load: 40 },
  { position: [59.941282, 30.359351], load: 65 },
  { position: [59.911256, 30.309343], load: 25 },
  { position: [59.921235, 30.349335], load: 15 },
  { position: [59.943078, 30.269049], load: 45 },
]

const { Search } = Input

const CircleMarker = ({ perc }: { perc: number }) => {
  return (
    <svg
      width="50px"
      height="50px"
      viewBox="0 0 42 42"
      className="donut"
      aria-labelledby="beers-title beers-desc"
      role="img"
    >
      <circle
        className="donut-hole"
        cx="21"
        cy="21"
        r="15.91549430918954"
        fill="white"
        role="presentation"
      ></circle>
      <circle
        className="donut-ring"
        cx="21"
        cy="21"
        r="15.91549430918954"
        fill="transparent"
        stroke="#d2d3d4"
        strokeWidth="3"
        role="presentation"
      ></circle>
      <circle
        className="donut-segment"
        cx="21"
        cy="21"
        r="15.91549430918954"
        fill="transparent"
        stroke= {perc < 30 ? 'lightgreen' :
            perc < 50 ? 'green' :
            perc < 70 ? 'orange' :
            perc < 80 ? 'pink' :  
        'red'}
        strokeWidth="3"
        strokeDasharray={`${perc} ${100 - perc}`}
        strokeDashoffset="25"
        aria-labelledby="donut-segment-1-title donut-segment-1-desc"
      ></circle>
      <g className="chart-text">
        <text className="chart-number" x="35%" y="60%">
          {perc}
        </text>
      </g>
    </svg>
  )
}

export const OnRoute: FC = () => {
  // const startPoint: LatLngExpression = [51.505, -0.09] // Start point coordinates
  // const finishPoint: LatLngExpression = [51.51, -0.11] // End point coordinates

  useEffect(() => {
    document.querySelector('.leaflet-control-attribution')?.remove()
  }, [])

  return (
    <div style={{ display: 'flex', gap: 10 }}>
      <div style={{ width: '50%' }}>
        <h2>Карта</h2>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 20,
          }}
        >
          <div style={{ display: 'flex', gap: 20 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div
                style={{
                  width: 15,
                  height: 15,
                  background: '#52C41A',
                  borderRadius: 3,
                }}
              />
              Малая зона: <b>500₽</b>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div
                style={{
                  width: 15,
                  height: 15,
                  background: '#FAAD14',
                  borderRadius: 3,
                }}
              />
              Большая зона: <b>1000₽</b>
            </div>
          </div>
        </div>
        <MapContainer
          center={[59.9343, 30.3351]}
          zoom={12}
          style={{ height: '80vh' }}
        >
          <TileLayer url="https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}" />
          {/* <CircleMarker center={[59.9343, 30.3351]} radius={50} color='red' fill={true}>
          <Popup>90%</Popup>
          </CircleMarker> */}
          {LOAD_ZONES.map(({ position, load }, idx) => {
            const icon = L.divIcon({
              className: 'custom-icon',
              html: ReactDOMServer.renderToString(<CircleMarker perc={load} />),
            })
            return <Marker position={position} icon={icon} />
          })}
        </MapContainer>
      </div>

      <div style={{ width: '50%' }}>
        <div>
          <h2>Курьеры на линии</h2>
          <Card style={{ backgroundColor: '#d9d9d9' }}>
            <Search
              placeholder="input search text"
              allowClear
              onSearch={() => {}}
              style={{ width: '100%', height: 36 }}
            />
            <Row justify={'space-evenly'}>
              <Space size={8}>
                <div
                  style={{
                    width: '100%',
                    backgroundColor: '#FFF',
                    borderRadius: '8px',
                  }}
                >
                  <h3>ул. Льва Толстого 1-3 </h3>
                  <p>15 курьеров</p>
                </div>
                <div
                  style={{
                    width: '100%',
                    backgroundColor: '#FFF',
                    borderRadius: '8px',
                  }}
                >
                  <h3>ул. Льва Толстого 1-3 </h3>
                  <p>15 курьеров</p>
                </div>
                <div
                  style={{
                    width: '100%',
                    backgroundColor: '#FFF',
                    borderRadius: '8px',
                  }}
                >
                  <h3>ул. Льва Толстого 1-3 </h3>
                  <p>15 курьеров</p>
                </div>
              </Space>
            </Row>
            <Divider />
            <Row justify={'space-evenly'}>
              <Space size={8}>
                <div
                  style={{
                    width: '100%',
                    backgroundColor: '#FFF',
                    borderRadius: '8px',
                  }}
                >
                  <h3>ул. Льва Толстого 1-3 </h3>
                  <p>15 курьеров</p>
                </div>
                <div
                  style={{
                    width: '100%',
                    backgroundColor: '#FFF',
                    borderRadius: '8px',
                  }}
                >
                  <h3>ул. Льва Толстого 1-3 </h3>
                  <p>15 курьеров</p>
                </div>
                <div
                  style={{
                    width: '100%',
                    backgroundColor: '#FFF',
                    borderRadius: '8px',
                  }}
                >
                  <h3>ул. Льва Толстого 1-3 </h3>
                  <p>15 курьеров</p>
                </div>
              </Space>
            </Row>
          </Card>
        </div>

        <div>
          <h2>Заказы в работе</h2>
          <Card style={{ backgroundColor: '#d9d9d9' }}>
            <Search
              placeholder="input search text"
              allowClear
              onSearch={() => {}}
              style={{ width: '100%', height: 36 }}
            />
            <Divider />
            {Array.from({ length: 10 }, (_, rowIndex) => (
              <Row justify="space-between" align="middle" key={rowIndex}>
                {Array.from({ length: 8 }, (_, colIndex) => (
                  <Col span={3} key={colIndex}>
                    <Space size={8}>{colIndex + 'content | '}</Space>
                  </Col>
                ))}
              </Row>
            ))}
          </Card>
        </div>
      </div>
    </div>
  )
}
