CREATE TABLE container
(
  id       INT  NOT NULL,
  shelf_id INT ,
  name     TEXT NOT NULL,
  PRIMARY KEY (id)
);

COMMENT ON TABLE container IS 'A container contains parts';

CREATE TABLE part
(
  id           INT  NOT NULL,
  container_id INT  NOT NULL,
  name         TEXT NOT NULL,
  description  TEXT,
  part_type    INT ,
  PRIMARY KEY (id)
);

COMMENT ON TABLE part IS 'Information about a part';

CREATE TABLE part_attributes
(
  id         INT  NOT NULL,
  part_id    INT  NOT NULL,
  name       TEXT NOT NULL,
  value_text TEXT,
  value_int  INT ,
  value_bool BOOL,
  PRIMARY KEY (id)
);

COMMENT ON TABLE part_attributes IS 'Custom attribute for a part';

CREATE TABLE shelf
(
  id                  INT  NOT NULL,
  storage_location_id INT ,
  name                TEXT NOT NULL,
  PRIMARY KEY (id)
);

COMMENT ON TABLE shelf IS 'A shelf contains containers';

CREATE TABLE storage_location
(
  id   INT  NOT NULL,
  name TEXT NOT NULL UNIQUE,
  PRIMARY KEY (id)
);

COMMENT ON TABLE storage_location IS 'The location where a shelf is';

ALTER TABLE part_attributes
  ADD CONSTRAINT FK_part_TO_part_attributes
    FOREIGN KEY (part_id)
    REFERENCES part (id);

ALTER TABLE part
  ADD CONSTRAINT FK_container_TO_part
    FOREIGN KEY (container_id)
    REFERENCES container (id);

ALTER TABLE shelf
  ADD CONSTRAINT FK_storage_location_TO_shelf
    FOREIGN KEY (storage_location_id)
    REFERENCES storage_location (id);

ALTER TABLE container
  ADD CONSTRAINT FK_shelf_TO_container
    FOREIGN KEY (shelf_id)
    REFERENCES shelf (id);

CREATE UNIQUE INDEX IDX_shelf
  ON shelf (storage_location_id ASC, name ASC);

CREATE UNIQUE INDEX IDX_container
  ON container (shelf_id ASC, name ASC);

CREATE UNIQUE INDEX IDX_part
  ON part (container_id ASC, name ASC);

CREATE UNIQUE INDEX IDX_part_attributes
  ON part_attributes (part_id ASC, name ASC);
