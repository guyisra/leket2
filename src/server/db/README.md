# Database Layer

## Pending Pickups Table

- (sub) supplier id
- user id
- date (required for exporting the data)
- pickup id (required for exporting)

## Suppliers Table

- id
- name
- location id ("main supplier")


      select
        suppliers.id as 'id',
        suppliers.name as 'name',
        suppliers.address as 'address',
        locations.id as 'locationId',
        locations.name as 'locationName'
      from pending_pickups
      join suppliers on pending_pickups.supplier_id = suppliers.id
      join locations on suppliers.location_id = locations.id
      where
        pending_pickups.user_id = ${userId};
