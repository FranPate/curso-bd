-- SELECT SUM(annual_cost) FROM insurances;

-- SELECT MAX(annual_cost) FROM insurances;
-- SELECT MIN(annual_cost) FROM insurances;

-- SELECT * FROM insurances WHERE annual_cost = (SELECT MAX(annual_cost) FROM insurances);
-- SELECT * FROM insurances WHERE annual_cost = (SELECT MIN(annual_cost) FROM insurances);

-- SELECT clients.name, clients.id
-- FROM insurances
-- JOIN clients ON insurances.client_id = clients.id
-- WHERE insurances.annual_cost = (SELECT MAX(annual_cost) FROM insurances);

-- SELECT SUM(annual_cost) FROM insurance_id WHERE EXTRACT(YEAR FROM start_date) = 2021;

-- SELECT AVG(price) FROM vehicles;

-- SELECT COUNT(*) FROM properties;
-- SELECT COUNT(*) FROM insurances WHERE type = "PROPERTY";

-- SELECT type, SUM(annual_cost) FROM insurances GROUP BY type;

-- SELECT client_id, SUM(annual_cost) FROM insurances GROUP BY client_id;

-- SELECT client_id, type, COUNT(annual_cost) FROM insurances GROUP BY client_id, type;

-- SELECT client_id, type, COUNT(type) FROM insurances GROUP BY client_id, type;