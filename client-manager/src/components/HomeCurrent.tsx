import { useEffect, FC } from 'react'
import { MapContainer, Marker, Polygon, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css'
import { LatLngExpression } from 'leaflet'
import 'leaflet-routing-machine'
import { Button, Card } from 'antd'
import appState from '../store/appState'

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

// const MapCustomComponent: FC<{
//   startPoint: LatLngExpression
//   finishPoint: LatLngExpression
// }> = ({ startPoint, finishPoint }) => {
//   // const map = useMap()

//   // useEffect(() => {
//   //   leaflet
//   //     .tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//   //       attribution: 'Map data &copy; OpenStreetMap contributors',
//   //     })
//   //     .addTo(map)
//   //   ;(leaflet as any).Routing.control({
//   //     waypoints: [startPoint, finishPoint],
//   //     router: new (leaflet as any).Routing.GraphHopper(
//   //       'YOUR_GRAPHHOPPER_API_KEY',
//   //     ),
//   //     containerClassName: 'routing-control-container',
//   //   }).addTo(map)
//   // }, [map, startPoint, finishPoint])

//   return (
//     <MapContainer
//       center={[59.9343, 30.3351]}
//       zoom={12}
//       style={{ height: '80vh' }}
//     >
//       <TileLayer url="https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}" />
//       <Marker position={[59.913763, 30.317974]} />
//       <Polygon
//         positions={LARGE_ZONE_POLYGON}
//         pathOptions={{ color: '#FAAD1480' }}
//       />
//       <Polygon
//         positions={SMALL_ZONE_POLYGON}
//         pathOptions={{ color: '#52C41A80' }}
//       />
//     </MapContainer>
//   )
// }

export const HomeCurrent: FC = () => {
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
          <Marker position={[59.913763, 30.317974]} />
          <Polygon
            positions={LARGE_ZONE_POLYGON}
            pathOptions={{ color: '#FAAD1480' }}
          />
          <Polygon
            positions={SMALL_ZONE_POLYGON}
            pathOptions={{ color: '#52C41A80' }}
          />
        </MapContainer>
      </div>
      <div style={{ width: '50%' }}>
        <h2>Активные курьеры</h2>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 10,
            height: 'calc(80vh + 42px)',
            overflow: 'scroll',
          }}
        >
          {appState.data.couriers
            .filter((courier) => courier.status === 'на доставке')
            .map((courier) => (
              <Card title={courier.name} key={courier.id}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 20,
                    }}
                  >
                    <p>{courier.phone}</p>
                    <p>{courier.status}</p>
                    <p>Заказ №{courier.orderId}</p>
                  </div>
                  <Button type="primary">На карте</Button>
                </div>
              </Card>
            ))}
        </div>
      </div>
    </div>
  )
}
