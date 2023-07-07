
CREATE TABLE "gallery" (
	"id" SERIAL PRIMARY KEY,
	"url" varchar(255) NOT NULL,
	"description" varchar(255) NOT NULL,
	"title" varchar(255) NOT NULL,
	"likes" INT  DEFAULT 0 NOT NULL,
	"dislikes" INT DEFAULT 0 NOT NULL
);

INSERT INTO "gallery" ("url", "description", "title", "likes", "dislikes")
VALUES
    ('images/dog.jpeg', 'Photo of a dog in my back yard', 'Gino', 0, 0),
    ('images/ims.jpeg', 'Photo of the IMS downtown', 'IMS', 0, 0),
    ('images/portwing1.jpeg', 'Photo of Port Wing, Wisconsin, more specifically, Lake Superior', 'Port Wing', 0, 0),
    ('images/portwing2.jpeg', 'Photo of Port Wing, Wisconsin, more specifically, Lake Superior', 'Port Wing', 0, 0),
    ('images/sedona.jpeg', 'Photo of the mountains of Sedona', 'Sedona', 0, 0),
    ('images/turle.jpeg', 'Photo of a turtle crossing the road', 'Turtle', 0, 0),
    ('images/zelda.jpeg', 'Photo of a dog in my back yard', 'Gino', 0, 0),
    ('images/link.jpeg', 'Photo of a dog in my back yard', 'Gino', 0, 0);

