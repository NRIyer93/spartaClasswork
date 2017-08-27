DROP TABLE IF EXISTS guide;

CREATE TABLE guide (

  id SERIAL PRIMARY KEY,
  title VARCHAR(255),
  content TEXT

);

INSERT INTO guide (title , content) VALUES ('Post 1' , 'content text 1');
INSERT INTO guide (title , content) VALUES ('Post 2' , 'content text 2');
INSERT INTO guide (title , content) VALUES ('Post 3' , 'content text 3');
INSERT INTO guide (title , content) VALUES ('Post 4' , 'content text 4');