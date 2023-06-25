import { useEffect, FC, useState } from 'react'
import { MapContainer, Marker, Polygon, TileLayer, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css'
import leaflet, { Icon } from 'leaflet'
import 'leaflet-routing-machine'
import { Button, Card } from 'antd'
import appState from '../store/appState'
import { LARGE_ZONE_POLYGON, SMALL_ZONE_POLYGON } from './HomeEdit'

const RoutingLayer: FC<{ activeCourier: any }> = ({ activeCourier }) => {
  const map = useMap()

  useEffect(() => {
    const routingControl = leaflet.Routing.control({
      waypoints: activeCourier.orderPoints.map((point: any[]) => {
        return leaflet.latLng(point[0], point[1])
      }),
      lineOptions: {
        styles: [
          {
            color: 'blue',
            opacity: 0.6,
            weight: 4,
          },
        ],
        extendToWaypoints: false,
        missingRouteTolerance: 100,
      },
      addWaypoints: false,
      fitSelectedRoutes: false,
      showAlternatives: false,
    })

    routingControl.addTo(map)

    return () => {
      routingControl.remove()
    }
  }, [map, activeCourier?.orderPoints])

  return null
}

export const HomeCurrent: FC = () => {
  const [activeCourier, setActiveCourier] = useState<any>(null)

  useEffect(() => {
    document.querySelector('.leaflet-control-attribution')?.remove()
  }, [])

  const handleCourierClickClosure = (courier: any) => () => {
    if (activeCourier?.id === courier.id) {
      setActiveCourier(null)
    } else {
      setActiveCourier(courier)
    }
  }

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
          center={[59.913763, 30.317974]}
          zoom={12}
          style={{ height: '80vh' }}
        >
          <TileLayer url="https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}" />
          <Marker
            position={[59.913763, 30.317974]}
            icon={
              new Icon({
                iconUrl: '/marker-icon-2x-purple.png',
                iconSize: [25, 41],
                iconAnchor: [12.5, 41],
              })
            }
          />
          <Polygon
            positions={LARGE_ZONE_POLYGON}
            pathOptions={{ color: '#FAAD1480' }}
          />
          <Polygon
            positions={SMALL_ZONE_POLYGON}
            pathOptions={{ color: '#52C41A80' }}
          />
          {activeCourier !== null && (
            <RoutingLayer activeCourier={activeCourier} />
          )}
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
                  <Button
                    type="primary"
                    onClick={handleCourierClickClosure(courier)}
                  >
                    На карте
                  </Button>
                </div>
              </Card>
            ))}
        </div>
      </div>
    </div>
  )
}
