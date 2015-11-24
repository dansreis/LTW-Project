DROP TABLE IF EXISTS User;
DROP TABLE IF EXISTS Photo;
DROP TABLE IF EXISTS Event;
DROP TABLE IF EXISTS Location;
DROP TABLE IF EXISTS EventUser;


CREATE TABLE User (
	id				INTEGER	NOT NULL PRIMARY KEY AUTOINCREMENT,
	name			VARCHAR(256) NOT NULL,
	mail			VARCHAR(256) NOT NULL,
	validation 		BOOLEAN NOT NULL,
	datanascimento	DATE,
	username		VARCHAR(64)	NOT NULL UNIQUE,
	password		VARCHAR(64)	NOT NULL
);

CREATE TABLE EventPhoto (
	id 			INTEGER	NOT NULL PRIMARY KEY AUTOINCREMENT,
	idUser		INTEGER	REFERENCES User(id),
	uploadDate	DATE NOT NULL,
	description	TEXT
);

CREATE TABLE Location (
	id 			INTEGER	NOT NULL PRIMARY KEY AUTOINCREMENT,
	name 		VARCHAR(64),
	adress 		VARCHAR(64) NOT NULL,
	description TEXT
);

CREATE TABLE Event (
	id 			INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
	idUser 		INTEGER NOT NULL REFERENCES User(id),
	idPhoto		INTEGER NOT NULL REFERENCES EventPhoto(id),
	idLocation 	INTEGER NOT NULL REFERENCES Location(id),
	private		BOOLEAN	NOT NULL,
	creationDate DATE NOT NULL,
	eventDate 	DATE NOT NULL,
	CHECK((julianday(eventDate) - julianday(creationDate)) >= 0)
);

CREATE TABLE EventUser (
	idEvent INTEGER	NOT NULL,
	idUser INTEGER NOT NULL,

	CONSTRAINT 	pk_EventUser PRIMARY KEY (idUser, idEvent),
	CONSTRAINT 	fk_idEvent FOREIGN KEY (idEvent) REFERENCES Event(id),
	CONSTRAINT fk_idUser FOREIGN KEY (idUser) REFERENCES User(id)
)