CREATE TABLE test(
	id VARCHAR(10) NOT NULL PRIMARY KEY,
    pw VARCHAR(20) NOT NULL,
    username VARCHAR(5) NOT NULL,
    gender ENUM( 'F', 'M', '' ) DEFAULT '' ,
    birthday DATE NOT NULL,
    age INT(3) NOT NULL DEFAULT 0
);

-- DELETE FROM test WHERE id = 'jungkrat';  수정할때 삭제하는 코드

INSERT INTO test (id, pw, username, gender, birthday, age) VALUES
('hong1234', '8o4bkg', '홍길동', 'M' ,'1990-01-31', 33 ),
('sexysung', '87awjkdf', '성춘향', 'F' ,'1992-03-31', 31 ),
('power70', 'qxur8sda', '변사또', 'M' ,'1970-05-02', 35 ),
('hanjo', 'jk48fn4', '한조', 'M' ,'1984-10-18', 39 ),
('widowmaker', '38ewifh3', '위도우', 'F' ,'1976-06-27', 47 ),
('dvadva', 'k3f3ah', '송하나', 'F' ,'2001-06-03', 22 ),
('jungkrat', '4ifha7f', '정크랫', 'M' ,'1999-11-11', 24 );

SELECT * FROM kdt11.test;

SELECT * FROM test ORDER BY birthday;  -- 생일기준 오름차순
SELECT * FROM test WHERE gender = 'M' ORDER BY username DESC; -- 남자, 이름을 내림차순
SELECT id,username FROM test WHERE birthday LIKE '199%' ;  -- 90년대 id, name 가져오기
SELECT * FROM test WHERE birthday LIKE '%-06-%' ORDER BY birthday;  -- 6월생 생일기준 오름차순
SELECT * FROM test WHERE gender = 'M' AND birthday LIKE '197%' ;  -- 남자 70년대생
SELECT * FROM test ORDER BY age DESC LIMIT 3;   -- 나이 내림차순 앞 3명만 
SELECT * FROM test WHERE age >= 25 AND age <= 50;  -- 나이 25이상 50 이하
UPDATE test SET pw = '12345678' WHERE id = 'hong1234' ; -- id 값 hong1234의 pw 값을 12345678로 변경
DELETE FROM test WHERE id = 'jungkrat'; -- id jungkrat 레코드 삭제