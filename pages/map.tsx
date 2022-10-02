import type { NextPage } from 'next'
import Map from '../components/Map'
import Metadata from '../components/Metadata'

const MapPage: NextPage = () => {
  return (
    <div>
        <Metadata />
        <Map />
    </div>
  )
}

export default MapPage