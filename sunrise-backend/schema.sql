CREATE DATABASE IF NOT EXISTS sunrise_school_cms
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

USE sunrise_school_cms;

CREATE TABLE IF NOT EXISTS pages (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  slug VARCHAR(150) NOT NULL UNIQUE,
  title VARCHAR(255) NOT NULL,
  content TEXT NOT NULL,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS staff (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(150) NOT NULL,
  role VARCHAR(100) NOT NULL,
  subject VARCHAR(100) DEFAULT NULL,
  department VARCHAR(100) DEFAULT NULL,
  photo VARCHAR(255) DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS media (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  type ENUM('image', 'video', 'pdf') NOT NULL,
  file VARCHAR(255) NOT NULL,
  category VARCHAR(100) DEFAULT NULL,
  title VARCHAR(255) NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS activities (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  category ENUM('sports', 'cocurricular') NOT NULL,
  level ENUM('school', 'district', 'state', 'national') NOT NULL,
  section ENUM('primary', 'sec', 'high') NOT NULL,
  image VARCHAR(255) DEFAULT NULL,
  description TEXT,
  year YEAR NOT NULL
);

CREATE TABLE IF NOT EXISTS results (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  class VARCHAR(50) NOT NULL,
  medium VARCHAR(50) NOT NULL,
  stream VARCHAR(50) DEFAULT NULL,
  file VARCHAR(255) NOT NULL,
  year YEAR NOT NULL
);

CREATE TABLE IF NOT EXISTS notices (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  file VARCHAR(255) DEFAULT NULL,
  date DATE NOT NULL
);

CREATE TABLE IF NOT EXISTS alumni (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(150) NOT NULL,
  batch YEAR NOT NULL,
  story TEXT,
  photo VARCHAR(255) DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS exams (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(150) NOT NULL,
  description TEXT,
  year YEAR NOT NULL
);

CREATE TABLE IF NOT EXISTS admin (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(100) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL
);

INSERT INTO pages (slug, title, content)
VALUES
  (
    'home',
    'Home',
    'Welcome to Sunrise School. We nurture academic excellence, character, and creativity in every learner.'
  ),
  (
    'about-us',
    'About Us',
    'Sunrise School is committed to holistic education through strong academics, co-curricular growth, and community values.'
  ),
  (
    'admissions',
    'Admissions',
    'Admissions are open for the new academic year. Contact the school office for eligibility, documents, and fee details.'
  )
ON DUPLICATE KEY UPDATE
  title = VALUES(title),
  content = VALUES(content),
  updated_at = CURRENT_TIMESTAMP;
