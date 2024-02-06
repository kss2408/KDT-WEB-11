use kdt11;

create table user(
	id int auto_increment primary key,
	username varchar(10) NOT NULL,
    age INT NOT NULL,
    address varchar(30) NOT NULL
);


INSERT INTO user (username, age, address ) VALUES ('홍길동', 22, '서울시 마포구') ;
INSERT INTO user (username, age, address ) VALUES ('성춘향', 23, '서울시 강남구') ;
INSERT INTO user (username, age, address ) VALUES ('이몽룡', 25, '서울시 용산구') ;
INSERT INTO user (username, age, address ) VALUES ('임꺽정', 41, '서울시 영등포구') ;
INSERT INTO user (username, age, address ) VALUES ('변사또', 30, '서울시 서대문구') ;
INSERT INTO user (username, age, address ) VALUES ('황진이', 24, '서울시 강서구') ;

SELECT * FROM user;
-- SELECT * FROM user WHERE age < 25 AND age >= 23 ;
-- SELECT * FROM user WHERE username = '이몽룡';
-- SELECT * FROM user WHERE age >= 24 ORDER BY username DESC;
-- SELECT * FROM user WHERE address LIKE '%강남%'; -- 주소가 '강남'이 들어가는 사람
-- SELECT * FROM user WHERE username LIKE '__향'; -- 마지막 글자가 '향' 인사람
-- SELECT * FROM user WHERE age BETWEEN 23 AND 25;
-- SELECT * FROM user WHERE age IN (23,25) ORDER BY age DESC LIMIT 5;
-- SELECT * FROM user WHERE address IS NOT NULL;

-- UPDATE user SET address = '부산시 해운대구', age = 25 WHERE id = 1;