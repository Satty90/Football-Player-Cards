import pool from "./pgClient.js";
import CLUBS from "./clubs.js";
import PLAYERS from "./players.js";
import MANAGERS from "./managers.js";

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
        logo VARCHAR (255),
        year_founded INT,
        location VARCHAR (255)
      );
    `);
    //Create Football Cards table
    await pool.query(`
      CREATE TABLE players (
        PlayerID INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
        first_name VARCHAR (255) NOT NULL,
        last_name VARCHAR (255) NOT NULL,
        position VARCHAR (255) NOT NULL,
        nationality VARCHAR (255) NOT NULL,
        team VARCHAR (255) NOT NULL
      );
    `);
    //Create a Manager table
    await pool.query(`
      CREATE TABLE managers (
        first_name VARCHAR(255),
        last_name VARCHAR(255),
        nationality VARCHAR (255),
        team VARCHAR (255)
      );
    `);

    //Seed the clubs table
    for (const club of CLUBS) {
      await pool.query(
        `INSERT INTO clubs(name, logo, year_founded, location) VALUES($1, $2, $3, $4)`,
        [club.name, club.logo, club.year_founded, club.location]
      );
    }

    //seed the player table
    for (const player of PLAYERS) {
      await pool.query(
        `INSERT INTO players(first_name, last_name, position, nationality, team) VALUES($1, $2, $3, $4, $5)`,
        [
          player.first_name,
          player.last_name,
          player.position,
          player.nationality,
          player.team,
        ]
      );
    }
    //seed the managers table
    for (const manager of MANAGERS) {
      await pool.query(
        `INSERT INTO managers(first_name, last_name, nationality, team) VALUES($1, $2, $3, $4)`,
        [
          manager.first_name,
          manager.last_name,
          manager.nationality,
          manager.team,
        ]
      );
    }
  } catch (error) {
    console.log(error);
  }
}

await seederDatabase();
