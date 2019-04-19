CREATE TABLE korisnici (
ime             VARCHAR(50) NOT NULL
prezime         VARCHAR(50) NOT NULL
email           VARCHAR(50) NOT NULL
password        VARCHAR(50) NOT NULL
date_created    TIMESTAMP DEFAULT NOW()
date_updated    TIMESTAMP DEFAULT NOW()
);

CREATE TABLE login_session (
    login_session_uid   uuid NOT NULL PRIMARY KEY,
    user_uid            uuid REFERENCES users (user uid),
    session_id          VARCHAR(255),
    date_created        TIMESTAMP DEFAULT NOW (),
    date_updated        TIMESTAMP DEFAULT NOW ()
);

CREATE TABLE dvorane (
    id_dvorane uuid     NOT NULL PRIMARY KEY,
    ime_dvorane         VARCHAR(100)  NOT NULL,
    adresa              VARCHAR(100) NOT NULL,
    img                 BYTEA,
    broj_mjesta         INT  NOT NULL,
    date_created        TIMESTAMP DEFAULT NOW (),
    date_updated        TIMESTAMP DEFAULT NOW ()
);

CREATE TABLE rezervacija (
    rezervacija_uid     INT  NOT NULL PRIMARY KEY,
    rezervacija_status  SMALLINT NOT NULL,
    rezervirano_od      TIMESTAMP,
    rezervirano_do      TIMESTAMP,
    status varchar(20)  NOT NULL,
    broj_mjesta         INT  NOT NULL,
    date_created        TIMESTAMP DEFAULT NOW (),
    date_updated        TIMESTAMP DEFAULT NOW ()
);