-- Account Entity
CREATE TABLE account
(
  id BIGINT UNSIGNED AUTO_INCREMENT NOT NULL,
  email VARCHAR(120) NOT NULL,
  hashed_password VARCHAR(255) NOT NULL,
  user_id BIGINT UNSIGNED,
  PRIMARY KEY (id),
  UNIQUE (email)
);

-- User Entity
CREATE TABLE user
(
  id BIGINT UNSIGNED AUTO_INCREMENT NOT NULL,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  image_url VARCHAR(2000),
  PRIMARY KEY (id)
) ENGINE = InnoDB;

-- Account to User Foreign Key
ALTER TABLE account
	ADD FOREIGN KEY account_to_user_idx (user_id)
	REFERENCES user (id)
	ON DELETE CASCADE
	ON UPDATE CASCADE;

-- Lunchspace Entity
CREATE TABLE lunchspace
(
  id BIGINT UNSIGNED AUTO_INCREMENT NOT NULL,
  name VARCHAR(24) NOT NULL,
  subdomain VARCHAR(24) NOT NULL,
  PRIMARY KEY (id),
  UNIQUE (subdomain)
) ENGINE = InnoDB;

-- Location Entity
CREATE TABLE location
(
  id BIGINT UNSIGNED AUTO_INCREMENT NOT NULL,
  name VARCHAR(64) NOT NULL,
  coordinates POINT NOT NULL,
  lunchspace_id BIGINT UNSIGNED NOT NULL,
  PRIMARY KEY (id)
) ENGINE = InnoDB;

-- Location to Lunchspace Foreign Key
ALTER TABLE location
	ADD FOREIGN KEY location_to_lunchspace_idx (lunchspace_id)
	REFERENCES lunchspace (id)
	ON DELETE CASCADE
	ON UPDATE CASCADE;

-- Member of Lunchspace Relationship
CREATE TABLE member_of
(
  user_id BIGINT UNSIGNED NOT NULL,
  lunchspace_id BIGINT UNSIGNED NOT NULL,
  is_admin BOOLEAN NOT NULL DEFAULT 0,
  PRIMARY KEY (user_id, lunchspace_id)
) ENGINE = InnoDB;

-- Member of Lunchspace Foreign Key
ALTER TABLE member_of
	ADD FOREIGN KEY member_of_lunchspace_idx (lunchspace_id)
	REFERENCES lunchspace (id)
	ON DELETE CASCADE
	ON UPDATE CASCADE,

	ADD FOREIGN KEY user_to_member_of_idx (user_id)
	REFERENCES user (id)
	ON DELETE CASCADE
	ON UPDATE CASCADE;

-- Join up at Location Relationship
CREATE TABLE join_up_at
(
  user_id BIGINT UNSIGNED NOT NULL,
  location_id BIGINT UNSIGNED NOT NULL,
  event_time TIME NOT NULL,
  event_date DATE NOT NULL,
  join_timestamp TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY(user_id, location_id, event_time, event_date)
) ENGINE = InnoDB;

-- Join up at Location Foreign Key
ALTER TABLE join_up_at
	ADD FOREIGN KEY user_join_up_at_idx (user_id)
	REFERENCES user (id)
	ON DELETE CASCADE
	ON UPDATE CASCADE,

	ADD FOREIGN KEY join_up_at_location_idx (location_id)
	REFERENCES location (id)
	ON DELETE CASCADE
	ON UPDATE CASCADE;

-- Invitation Entity
CREATE TABLE invitation
(
  token VARCHAR(36) NOT NULL,
  lunchspace_id BIGINT UNSIGNED NOT NULL,
  email VARCHAR(120) NOT NULL,
  PRIMARY KEY(token),
  UNIQUE (lunchspace_id, email)
) ENGINE = InnoDB;

-- Invitation Foreign Key
ALTER TABLE invitation
  ADD FOREIGN KEY invitation_to_lunchspace_idx (lunchspace_id)
  REFERENCES lunchspace (id)
  ON DELETE CASCADE
  ON UPDATE CASCADE;

-- Subscriptions from a user from the web api
CREATE TABLE web_notification_subscription
(
  user_id BIGINT UNSIGNED NOT NULL,
  session_id CHAR(36) NOT NULL,
  lunchspace_id BIGINT UNSIGNED NOT NULL,
  endpoint VARCHAR(512) NOT NULL,
  -- TODO: What ist a good length for both key properties?
  key_auth VARCHAR(64) NOT NULL,
  key_p256dh VARCHAR(128) NOT NULL,
  user_agent VARCHAR(256),
  PRIMARY KEY (lunchspace_id, endpoint)
) ENGINE = InnoDB;

-- Web Subscription Foreign Key
ALTER TABLE web_notification_subscription
  ADD FOREIGN KEY user_subscription_idx (user_id)
  REFERENCES user (id)
  ON DELETE CASCADE
  ON UPDATE CASCADE,

  ADD FOREIGN KEY subscription_lunchspace_idx (lunchspace_id)
  REFERENCES lunchspace (id)
  ON DELETE CASCADE
  ON UPDATE CASCADE;

-- View on the member data of a location
CREATE VIEW event_participants AS
SELECT join_up_at.*, user.*, location.lunchspace_id
FROM join_up_at
JOIN user ON join_up_at.user_id = user.id
JOIN location ON join_up_at.location_id = location.id
ORDER BY join_up_at.join_timestamp DESC;

