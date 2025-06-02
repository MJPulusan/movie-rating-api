-- set client_min_messages to warning;

-- -- -- DANGER: this is NOT how to do it in the real world.
-- -- -- `drop schema` INSTANTLY ERASES EVERYTHING.
-- drop schema "public" cascade;

-- create schema "public";

DROP TABLE IF EXISTS "movies";

CREATE TABLE "movies" (
  "id" SERIAL PRIMARY KEY,
  "title" VARCHAR NOT NULL,
  "summary" TEXT,
  "imdbLink" TEXT,
  "rating" INTEGER CHECK (rating >= 1 AND rating <= 5),
  "createdAt" timestamp DEFAULT (now())
);