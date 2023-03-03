# wise-cau
## 제작자 및 역할
Back-End: 서범석, 장명훈
Front-End: 서범석, 임수현

## introduction
슬기로운 중앙 생활!


중앙대생을 위해 필요한 정보들을 퀴즈 형식으로 제공하는 웹 사이트 입니다.

## 사용된 기술 스택
- Back-End : Node.js(express), mySQL
- Front-End : HTML/CSS/JS, React
- 배포 : AWS EC2, RDS

## 제공 서비스

### 1. 단과대 선택
<img src = "https://user-images.githubusercontent.com/98157935/217735326-c29f44e9-42bd-43d8-aafa-8d6176993de9.png" width = "200" height="400"/>
<img src = "https://user-images.githubusercontent.com/98157935/217735244-8327eb5b-dbc3-4c16-a91f-600e18f4726f.png" width = "200" height="400"/>

- 퀴즈 풀기 전에 단과대를 선택한다.
- Dropdown 형식으로 선택한다
- 이 리스트의 데이터는 백엔드 측에서 제공받아야함
- 다음 버튼을 누를시 퀴즈 시작 화면으로 넘어가고, 거기서 다음 버튼을 눌러 퀴즈 화면으로 넘어가야함
- 단과대 데이터
    1. 인문대학
    2. 사회과학대학
    3. 사범대학
    4. 자연과학대학
    5. 공과대학
    6. 창의ICT공과대학
    7. 소프트웨어대학
    8. 경영경제대학
    9. 의과대학
    10. 약학대학
    11. 적십자간호대학
    12. 예술대학

### 2. 퀴즈풀기

<img src = "https://user-images.githubusercontent.com/98157935/217736049-5ceeb646-e578-4418-8a84-a6cb29905deb.png"/>

- 10개의 랜덤한 퀴즈를 사용자가 풀게 한다.
- 별도의 시간제한은 두지 않는다.
- 이후 자신의 점수를 확인할 수 있는 결과 화면으로 넘어간다.
- 결과 화면에서는 [홈화면가기], [단과대별 등수 확인가기]를 선택할 수 있다.


### 3. 퀴즈 통계

figma에는 퀴즈 결과 화면과 통계가 동일하지만, 이런 경우 통계를 보기 위해서 문제를 풀어야 한다는 단점이 있다. 이 부분은 분리하는 것이 좋아보인다. (결과 화면과 통계 화면의 분리)

 하지만 이렇게 하는 경우 메인 화면에서 [정보탐색] [퀴즈풀기] 와 함께 [통계] 등의 버튼을 추가해야하는데, 3개의 버튼은 이쁘지 않다. 하지만 기능적으로 통계를 문제를 풀어야만 볼수 있다는건 더 맘에 안들기 때문에 두 화면을 분리하도록 한다.

<img src = "https://user-images.githubusercontent.com/98157935/217736372-6131e936-5bd6-4fa3-986c-ea42401d9b46.png" width = "200" height="450"/>

통계 버튼 클릭시 위와같이 생긴 화면을 사용자에게 보여준다.

## Directory Structure



## 데이터베이스 Schema
<img src = "https://user-images.githubusercontent.com/98157935/218380124-96a9758c-7f38-4efd-951b-96baffc305c8.png" width = "600" height="400"/>
