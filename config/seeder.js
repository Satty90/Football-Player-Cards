import pool from "./pgClient.js";

async function seederDatabase() {
  try {
    //Drop existing tables if they exist
    await pool.query(`
      DROP TABLE IF EXISTS players CASCADE;
      DROP TABLE IF EXISTS managers CASCADE;
      DROP TABLE IF EXISTS clubs;
    `);
    // Create team table
    await pool.query(`
      CREATE TABLE clubs (
        ClubID INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
        Name VARCHAR (255),
        Logo VARCHAR (255),
        Year_Founded INT,
        Location VARCHAR (255)
      );
    `);
    //Create Football Cards table
    await pool.query(`
      CREATE TABLE players (
        PlayerID INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
        First_name VARCHAR (255) NOT NULL,
        Last_Name VARCHAR (255) NOT NULL,
        Position VARCHAR (255) NOT NULL,
        Nationality VARCHAR (255) NOT NULL,
        Club_ID INT REFERENCES clubs(ClubID)
      );
    `);
    //Create a Manager table
    await pool.query(`
      CREATE TABLE managers (
        First_name VARCHAR(255),
        Last_name VARCHAR(255),
        Nationality VARCHAR (255),
        Club_ID INT REFERENCES clubs(ClubID)
      );
    `);
    //Seed the clubs table
    await pool.query(`
      INSERT INTO clubs (Name, Logo, Year_Founded, Location) 
      VALUES
        ('Manchester United F.C.', 'https://example.com/logos/manchester_united.png', '1878', 'Old Trafford'),
        ('Manchester City F.C.', 'https://example.com/logos/manchester_city.png', '1880', 'Etihad Stadium'),
        ('Liverpool F.C.', 'https://example.com/logos/liverpool.png', '1892', 'Anfield'),
        ('Chelsea F.C.', 'https://example.com/logos/chelsea.png', '1905', 'Stamford Bridge'),
        ('Tottenham Hotspur F.C.', 'https://example.com/logos/tottenham_hotspur.png', '1882', 'Tottenham Hotspur Stadium'),
        ('Arsenal F.C.', 'https://example.com/logos/arsenal.png', '1886', 'Emirates Stadium'),
        ('West Ham United F.C.', 'https://example.com/logos/west_ham.png', '1895', 'London Stadium'),
        ('Everton F.C.', 'https://example.com/logos/everton.png', '1878', 'Goodison Park'),
        ('A.F.C. Bournemouth', 'https://example.com/logos/bournemouth.png', '1899', 'Vitality Stadium'),
        ('Wolverhampton Wanderers F.C.', 'https://example.com/logos/wolves.png', '1877', 'Molineux Stadium'),
        ('Aston Villa F.C.', 'https://example.com/logos/aston_villa.png', '1874', 'Villa Park'),
        ('Newcastle United F.C.', 'https://example.com/logos/newcastle_united.png', '1892', 'St. James Park'),
        ('Crystal Palace F.C.', 'https://example.com/logos/crystal_palace.png', '1905', 'Selhurst Park'),
        ('Brighton & Hove Albion F.C.', 'https://example.com/logos/brighton.png', '1901', 'American Express Stadium'),
        ('Fulham F.C.', 'https://example.com/logos/fulham.png', '1879', 'Craven Cottage'),
        ('Brentford F.C.', 'https://example.com/logos/brentford.png', '1889', 'Gtech Community Stadium'),
        ('Burnley F.C.', 'https://example.com/logos/burnley.png', '1882', 'Turf Moor'),
        ('Nottingham Forest F.C.', 'https://example.com/logos/nottingham_forrest.png', '1865', 'City Ground'),
        ('Luton Town F.C.', 'https://example.com/logos/luton_town.png', '1885', 'Kenilworth Road'),
        ('Sheffield United F.C.', 'https://example.com/logos/sheffield_united.png', '1889', 'Bramall Lane')
    `);
  } catch (error) {
    console.log(error);
  }
}

await seederDatabase();
