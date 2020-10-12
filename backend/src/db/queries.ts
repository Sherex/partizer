import { getClient, format } from './db'
import { logger } from '@vtfk/logger'

interface LocationInsert {
  name: string
}
export async function insertLocations (locations: LocationInsert[]): Promise<void> {
  const values = locations.map(loc => [loc.name])

  const client = await getClient()
  try {
    await client.query(format(`
      INSERT INTO storage_location (name)
      VALUES %L
    `, values))
  } catch (error) {
    logger('error', ['queries', 'insertLocations', 'query failed', 'error', error.message])
  } finally {
    client.release()
  }
}

interface ShelfInsert {
  location_id: number
  name: string
}
export async function insertShelves (shelves: ShelfInsert[]): Promise<void> {
  const values = shelves.map(shelf => [shelf.location_id, shelf.name])

  const client = await getClient()
  try {
    await client.query(format(`
      INSERT INTO shelf (storage_location_id, name)
      VALUES %L
    `, values))
  } catch (error) {
    logger('error', ['queries', 'insertShelves', 'query failed', 'error', error.message])
  } finally {
    client.release()
  }
}

interface ContainerInsert {
  shelf_id: number
  name: string
}
export async function insertContainers (containers: ContainerInsert[]): Promise<void> {
  const values = containers.map(con => [con.shelf_id, con.name])

  const client = await getClient()
  try {
    await client.query(format(`
      INSERT INTO container (shelf_id, name)
      VALUES %L
    `, values))
  } catch (error) {
    logger('error', ['queries', 'insertContainers', 'query failed', 'error', error.message])
  } finally {
    client.release()
  }
}
