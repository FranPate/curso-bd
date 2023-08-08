-- SELECT * FROM insurances WHERE annual_cost > 400;

-- SELECT * FROM insurances WHERE percentage_covered >= 30;

-- SELECT * FROM insurances WHERE start_date < "2021-01-01";
-- SELECT * FROM insurances WHERE EXTRACT(YEAR FROM start_date) < 2021;

-- SELECT * FROM insurances WHERE start_date >= "2019-01-01" AND start_date <= "2021-12-31";
-- SELECT * FROM insurances WHERE EXTRACT(YEAR FROM start_date) BETWEEN 2019 AND 2021;

-- SELECT * FROM insurances WHERE annual_cost > 400 OR start_date >= "2019-12-31";

-- SELECT * FROM insurances WHERE annual_cost > 400 OR EXTRACT(YEAR FROM start_date) = 2019;