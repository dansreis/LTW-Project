.bail ON
.mode columns
.headers on
.nullvalue NULL
PRAGMA foreign_keys = ON;

/*******INCLUDES********/
.read LTW_Database.sql
/***********************/



/*******INSERTS*********/
/*passwords: qwerty, 12345, asdasd*/
INSERT INTO User(USERNAME, EMAIL, PASSWORD, DATANASCIMENTO) VALUES('Pigmoth', 'pigmoth@gmail.com', '$2y$10$Pjnde6rRKvo4mDaQmWNYme1K6wqWbeoM/Asq6uGLMvqm4ms1eOqyq', '1995-01-03'); 
INSERT INTO User(USERNAME, EMAIL, PASSWORD, DATANASCIMENTO) VALUES('guilhermevpinto', 'guilhermevpinto@gmail.com', '$2y$10$x7HX5nnwJaOhNfmEL5irx.dEnhmapRMzcS.76hC2H.dDTXmW8EpSG', '1994-12-13');
INSERT INTO User(USERNAME, EMAIL, PASSWORD, DATANASCIMENTO) VALUES('Nutil', 'luisfigueiredos@hotmail.com', '$2y$10$ZOAtLO0TM04rgulbkuXcJO3AciQSc7blNs.ThNs81jUPm.uUuGNAu', '1995-04-20');

INSERT INTO EventPhoto(IDUSER, UPLOADDATE) VALUES(1, '2015-11-17');
INSERT INTO EventPhoto(IDUSER, UPLOADDATE) VALUES(2, '2015-10-12');
INSERT INTO EventPhoto(IDUSER, UPLOADDATE) VALUES(3, '2015-10-17');

INSERT INTO Location(NAME, ADDRESS, DESCRIPTION) VALUES('FEUP', 'Roberto Frias', 'FEUPCaffe Spot');
INSERT INTO Location(NAME, ADDRESS, DESCRIPTION) VALUES('Estacao de Comboio S. Bento', 'Aliados', 'Pouca Terra');
INSERT INTO Location(NAME, ADDRESS, DESCRIPTION) VALUES('Metro Sto. Ovidio', 'Sto. Ovidio', 'Terminal linha amarela');

INSERT INTO EVENT(IDUSER,DESCRIPTION, IDPHOTO, IDLOCATION, PRIVATE, CREATIONDATE, EVENTDATE) VALUES(1,'Um evento fagotão1', 1, 2, 0, '2015-11-16', '2015-11-17');

INSERT INTO EVENT(IDUSER,DESCRIPTION, IDPHOTO, IDLOCATION, PRIVATE, CREATIONDATE, EVENTDATE) VALUES(3,'Um evento fagotão2', 2, 1, 1, '2015-11-10', '2015-11-14');

INSERT INTO EVENT(IDUSER,DESCRIPTION, IDPHOTO, IDLOCATION, PRIVATE, CREATIONDATE, EVENTDATE) VALUES(2,'Um evento fagotão3', 1, 2, 0, '2015-11-16', '2015-11-17');

INSERT INTO EVENT(IDUSER,DESCRIPTION, IDPHOTO, IDLOCATION, PRIVATE, CREATIONDATE, EVENTDATE) VALUES(2,'Um evento fagotão4', 1, 2, 0, '2015-11-16', '2015-11-17');

INSERT INTO EVENT(IDUSER,DESCRIPTION, IDPHOTO, IDLOCATION, PRIVATE, CREATIONDATE, EVENTDATE) VALUES(2,'Um evento fagotão5', 1, 2, 0, '2015-11-16', '2015-11-17');

INSERT INTO EVENT(IDUSER,DESCRIPTION, IDPHOTO, IDLOCATION, PRIVATE, CREATIONDATE, EVENTDATE) VALUES(2,'Um evento fagotão6', 1, 2, 0, '2015-11-16', '2015-11-17');

INSERT INTO EVENT(IDUSER,DESCRIPTION, IDPHOTO, IDLOCATION, PRIVATE, CREATIONDATE, EVENTDATE) VALUES(2,'Um evento fagotão7', 1, 2, 0, '2015-11-16', '2015-11-17');

INSERT INTO EVENT(IDUSER,DESCRIPTION, IDPHOTO, IDLOCATION, PRIVATE, CREATIONDATE, EVENTDATE) VALUES(2,'Um evento fagotão8', 1, 2, 0, '2015-11-16', '2015-11-17');

INSERT INTO EVENT(IDUSER,DESCRIPTION, IDPHOTO, IDLOCATION, PRIVATE, CREATIONDATE, EVENTDATE) VALUES(2,'Um evento fagotão9', 1, 2, 0, '2015-11-16', '2015-11-17');

INSERT INTO EVENT(IDUSER,DESCRIPTION, IDPHOTO, IDLOCATION, PRIVATE, CREATIONDATE, EVENTDATE) VALUES(2,'Um evento fagotão10', 1, 2, 0, '2015-11-16', '2015-11-17');

INSERT INTO EVENT(IDUSER,DESCRIPTION, IDPHOTO, IDLOCATION, PRIVATE, CREATIONDATE, EVENTDATE) VALUES(2,'Um evento fagotão11', 1, 2, 0, '2015-11-16', '2015-11-17');

INSERT INTO EVENT(IDUSER,DESCRIPTION, IDPHOTO, IDLOCATION, PRIVATE, CREATIONDATE, EVENTDATE) VALUES(2,'Um evento fagotão12', 1, 2, 0, '2015-11-16', '2015-11-17');

INSERT INTO EVENT(IDUSER,DESCRIPTION, IDPHOTO, IDLOCATION, PRIVATE, CREATIONDATE, EVENTDATE) VALUES(2,'Um evento fagotão13', 1, 2, 0, '2015-11-16', '2015-11-17');

INSERT INTO EVENT(IDUSER,DESCRIPTION, IDPHOTO, IDLOCATION, PRIVATE, CREATIONDATE, EVENTDATE) VALUES(2,'Um evento fagotão14', 1, 2, 0, '2015-11-16', '2015-11-17');

INSERT INTO EVENT(IDUSER,DESCRIPTION, IDPHOTO, IDLOCATION, PRIVATE, CREATIONDATE, EVENTDATE) VALUES(2,'Um evento fagotão15', 1, 2, 0, '2015-11-16', '2015-11-17');

INSERT INTO EVENT(IDUSER,DESCRIPTION, IDPHOTO, IDLOCATION, PRIVATE, CREATIONDATE, EVENTDATE) VALUES(2,'Um evento fagotão16', 1, 2, 0, '2015-11-16', '2015-11-17');

INSERT INTO EVENT(IDUSER,DESCRIPTION, IDPHOTO, IDLOCATION, PRIVATE, CREATIONDATE, EVENTDATE) VALUES(2,'Um evento fagotão17', 1, 2, 0, '2015-11-16', '2015-11-17');

INSERT INTO EVENT(IDUSER,DESCRIPTION, IDPHOTO, IDLOCATION, PRIVATE, CREATIONDATE, EVENTDATE) VALUES(2,'Um evento fagotão18', 1, 2, 0, '2015-11-16', '2015-11-17');

INSERT INTO EVENT(IDUSER,DESCRIPTION, IDPHOTO, IDLOCATION, PRIVATE, CREATIONDATE, EVENTDATE) VALUES(2,'Um evento fagotão19', 1, 2, 0, '2015-11-16', '2015-11-17');

INSERT INTO EVENT(IDUSER,DESCRIPTION, IDPHOTO, IDLOCATION, PRIVATE, CREATIONDATE, EVENTDATE) VALUES(2,'Um evento fagotão20', 1, 2, 0, '2015-11-16', '2015-11-17');

INSERT INTO EVENT(IDUSER,DESCRIPTION, IDPHOTO, IDLOCATION, PRIVATE, CREATIONDATE, EVENTDATE) VALUES(2,'Um evento fagotão21', 1, 2, 0, '2015-11-16', '2015-11-17');

INSERT INTO EVENT(IDUSER,DESCRIPTION, IDPHOTO, IDLOCATION, PRIVATE, CREATIONDATE, EVENTDATE) VALUES(2,'Um evento fagotão22', 1, 2, 0, '2015-11-16', '2015-11-17');

INSERT INTO EVENT(IDUSER,DESCRIPTION, IDPHOTO, IDLOCATION, PRIVATE, CREATIONDATE, EVENTDATE) VALUES(2,'Um evento fagotão23', 1, 2, 0, '2015-11-16', '2015-11-17');









