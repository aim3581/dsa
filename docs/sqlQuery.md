Certainly! Here's an example of creating a SQLite database, creating a table, inserting sample data, and then querying the top 3 rankers for each department using the SQL query I provided earlier:

```sql
-- Create the database and connect to it
CREATE DATABASE CollegeDB;
USE CollegeDB;

-- Create the table for student marks
CREATE TABLE MarksTable (
  RollNumber INT PRIMARY KEY,
  Stream VARCHAR(50),
  Subject VARCHAR(50),
  Marks INT
);

-- Insert sample data
INSERT INTO MarksTable (RollNumber, Stream, Subject, Marks) VALUES
  (1, 'Science', 'Physics', 90),
  (2, 'Science', 'Physics', 85),
  (3, 'Science', 'Physics', 92),
  (4, 'Science', 'Mathematics', 88),
  (5, 'Science', 'Mathematics', 82),
  (6, 'Science', 'Mathematics', 95),
  (7, 'Commerce', 'Accounts', 75),
  (8, 'Commerce', 'Accounts', 80),
  (9, 'Commerce', 'Accounts', 90),
  (10, 'Commerce', 'Economics', 85),
  (11, 'Commerce', 'Economics', 88),
  (12, 'Commerce', 'Economics', 92);

-- Query to find the top 3 rankers of each department
WITH RankedStudents AS (
  SELECT
    RollNumber,
    Stream,
    Subject,
    Marks,
    RANK() OVER (PARTITION BY Stream ORDER BY Marks DESC) AS Rank
  FROM
    MarksTable
)
SELECT
  RollNumber,
  Stream,
  Subject,
  Marks,
  Rank
FROM
  RankedStudents
WHERE
  Rank <= 3;
```

Please note that the above example is for SQLite syntax. If you're using a different database system, the syntax might vary slightly, but the general approach remains the same. Make sure to adapt the code to your specific database system.