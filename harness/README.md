# 고스돕 하네스

이 하네스는 세 가지를 점검한다.

- `구조 검사`: 핵심 문서와 엔트리 파일, watchdog 같은 보호막이 있는지
- `acceptance 검사`: 사용자가 요구한 핵심 규칙과 UI 약속이 코드/문서에 반영됐는지
- `백로그 상태 요약`: `docs/gostop-backlog.md` 기준으로 치명/미완료/부분 반영/완료 현황이 어떤지

## 구조

```text
harness/
  run-harness.js      # 진입점
  orchestrator.js     # 전체 흐름 조합
  checklist.json      # acceptance 요구사항 목록
  checks/
    structural.js     # 구조 검사
    acceptance.js     # 문서/코드 반영 검사
    backlog.js        # 백로그 파싱과 상태 요약
  sources/
    loader.js         # 프로젝트 파일 로딩
  reporters/
    console.js        # 콘솔 출력
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

## 확장 방법

- `harness/checklist.json`에 새 항목을 추가하면 acceptance 검사가 늘어난다.
- 사용자가 새로 지적한 요구사항은 문서와 checklist를 같이 갱신하는 방식으로 유지한다.
- 새 검사기를 만들 때는 `checks/`에 모듈을 추가하고 `orchestrator.js`에서 조합한다.
