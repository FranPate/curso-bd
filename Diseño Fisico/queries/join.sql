-- SELECT
--     clients.id AS client_id,
--     insurances.id AS insurance_id,
--     clients.name,
--     insurances.type,
--     insurances.annual_cost
-- FROM clients
-- JOIN insurances IN insurances.client_id = clients.id;

-- SELECT
--     vehicles.plate_number,
--     vehicles.price,
--     insurances.annual_cost
-- FROM insurances
-- JOIN vehicles ON insurances.id = vehicles.insurance_id
-- WHERE insurances.type = "VEHICLE";

-- SELECT
--     clients.name,
--     properties.area,
--     properties.city,
--     insurances.annual_cost
-- FROM clients
-- JOIN insurances ON insurances.client_id = clients.id
-- JOIN properties ON properties.insurance_id = insurances.id
-- WHERE insurances.type = "PROPERTY"