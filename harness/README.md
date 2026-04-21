# 고스돕 하네스

이 하네스는 다섯 가지를 점검한다.

- `구조 검사`: 핵심 문서와 엔트리 파일, watchdog 같은 보호막이 있는지
- `acceptance 검사`: 사용자가 요구한 핵심 규칙과 UI 약속이 코드/문서에 반영됐는지
- `시각 검수`: 메인보드 비침범, 카드 크기, 겹침 비율, 모바일 가로 전용 레이아웃 같은 시각 규칙이 유지되는지
- `턴 흐름 검수`: 새 판 보호막, 모션 정리 경로, watchdog, 뒤집기 reveal 순서가 유지되는지
- `백로그 상태 요약`: `docs/gostop-backlog.md` 기준으로 치명/미완료/부분 반영/완료 현황이 어떤지

마지막에는 `검수 점수 100점 만점`으로 계산하고, `90점 이상 + 하드 실패 없음`이어야 통과시킨다.

## 구조

```text
harness/
  run-harness.js            # 진입점
  orchestrator.js           # 전체 흐름 조합
  checklist.json            # acceptance 요구사항 목록
  checks/
    structural.js           # 구조 검사
    acceptance.js           # 문서/코드 반영 검사
    backlog.js              # 백로그 파싱과 상태 요약
    visual.js               # 시각 레이아웃 검수
    runtime-turn-flow.js    # 턴 흐름/모션 안정성 검수
    review-score.js         # 100점 점수화와 90점 게이트
  sources/
    loader.js               # 프로젝트 파일 로딩
  reporters/
    console.js              # 콘솔 출력
```

## 실행

```bash
node /Users/edu/Documents/GitHub/learning_gostop/harness/run-harness.js
```

## 지금 감시하는 핵심 항목

- 조커는 피 1장 가치인지
- 고/스톱은 3점부터 가능한지
- 상대 A/B 방향감 규칙이 문서와 코드에 함께 있는지
- 피 줄이 카드 수가 아니라 피 값 기준으로 5씩 끊기는지
- 상대 고 횟수를 드러내는 장치가 있는지
- 턴 멈춤 방지용 보호막이 코드에 있는지
- 모바일/태블릿 안내 UI가 있는지
- 전체 패 참고표 기능이 있는지
- 메인보드와 플레이어 구역이 서로 침범하지 않도록 overflow 가 걸려 있는지
- 카드 크기와 겹침 비율이 과도하지 않은지
- 뒤집기 reveal -> 매칭 -> 턴 종료 순서 보호막이 있는지

## 검수 점수 기준

- `구조/기본 안전성`: 15점
- `규칙/요구사항 반영`: 25점
- `시각 레이아웃 검수`: 25점
- `턴 흐름/모션 안정성 검수`: 25점
- `백로그 건강도`: 10점

총점 `90점 이상`이어야 통과한다.
그리고 아래 항목은 점수와 별도로 `하드 실패`로 본다.

- 핵심 파일 누락
- `high` severity acceptance 실패

## 확장 방법

- `harness/checklist.json`에 새 항목을 추가하면 acceptance 검사가 늘어난다.
- 시각 규칙이 늘어나면 `checks/visual.js`에 추가한다.
- 턴/모션 보호막이 늘어나면 `checks/runtime-turn-flow.js`에 추가한다.
- 점수 기준을 바꾸고 싶으면 `checks/review-score.js`를 조정한다.
- 사용자가 새로 지적한 요구사항은 문서와 checklist를 같이 갱신하는 방식으로 유지한다.
