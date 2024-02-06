CREATE TABLE employees (
id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
username VARCHAR(31) NOT NULL,
department VARCHAR(31) NOT NULL,
salary INT
);

INSERT INTO employees (username, department, salary ) VALUES
('홍길동', 'IT 개발팀' , 5000 ),
('이몽룡', '마케팅팀' , 4800 ),
('임꺽정', '인사팀' , 5500 ),
('성춘향', '디자인팀' , 4500 ),
('황진이', '인사팀' , 4800 ),
('흥부' , '기획팀' , 6000 ),
('놀부' , '기획팀' , 6500 ),
('변사또', 'IT 개발팀', 4000);

-- SELECT * FROM kdt11.employees;

-- SELECT DISTINCT department FROM employees;
-- SELECT department, AVG(salary) AS avg_salary FROM employees GROUP BY department HAVING AVG(salary) >
-- SELECT sum(salary) AS sum_salary FROM employees;
SELECT count(*) AS count_employees FROM employees WHERE department = 'IT 개발팀'