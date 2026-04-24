# 채택한 항목

## 1. 전략 체크리스트 패널
- 채택 이유: 사용자 요구가 `흐름/위험/기술포인트`보다 `상대 줄 체크` 쪽에 더 가까웠다.
- 반영 문서: `docs/gostop-tutor-spec.md`
- 반영 코드: `script.js`

## 2. 전체 패 참고표
- 채택 이유: 초보가 월/짝/단줄/고도리를 동시에 익혀야 해서 튜터만으로는 부족했다.
- 반영 문서: `docs/gostop-ui-spec.md`
- 반영 코드: `script.js`, `index.html`

## 3. 모바일 가로 중심 UI
- 채택 이유: 메인보드와 사이드바를 동시에 봐야 하므로 세로보다 가로가 핵심 흐름에 맞다.
- 반영 문서: `docs/gostop-ui-spec.md`
- 반영 코드: `styles.css`, `index.html`

## 4. reveal -> match -> capture 턴 모션
- 채택 이유: 내가 낸 패와 뒤집은 패가 어디로 붙는지 보여줘야 초보가 판을 읽을 수 있다.
- 반영 문서: `docs/gostop-ui-spec.md`, `docs/gostop-tutor-spec.md`
- 반영 코드: `script.js`

## 5. 표준룰과 옵션룰 분리
- 채택 이유: 조커, 피 이동, 박 규칙처럼 집마다 다른 부분을 표준룰과 섞으면 추천 로직이 흔들린다.
- 반영 문서: `docs/gostop-core-rules.md`
- 반영 코드: `script.js`
