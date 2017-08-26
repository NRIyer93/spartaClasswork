DROP TABLE IF EXISTS guide;

CREATE TABLE guide (

	id SERIAL PRIMARY KEY,
	title VARCHAR(255),
	content TEXT

);

INSERT INTO guide (title, content) VALUES ("Guide 1", "Guide 1 entry")
INSERT INTO guide (title, content) VALUES ("Guide 2", "Guide 2 entry")
INSERT INTO guide (title, content) VALUES ("Guide 3", "Guide 3 entry")
INSERT INTO guide (title, content) VALUES ("Guide 4", "Guide 4 entry")