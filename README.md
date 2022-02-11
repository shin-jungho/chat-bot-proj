# chat-bot-app proj

- dialogflow를 활용한 chat bot 프로젝트 입니다.

## ERROR
1. address already in use :::5000
  - kill -9 <pid번호> 해도 삭제가 안됨 -> 포트번호 바꿔서 해결

2. Error: 7 PERMISSION_DENIED: IAM permission 'dialogflow.sessions.detectIntent' on '~~'
  - api 키 설정 잘못한듯