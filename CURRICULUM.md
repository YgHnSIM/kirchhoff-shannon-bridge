# Kirchhoff–Shannon Bridge — 「두 엔트로피」 커리큘럼 계약

## 목표
대학 고학년~초급 대학원 깊이의 미니 코스. 일반교양 금지.
학교 졸업 후 오래 지난 학습자도 Phase A만으로 되살아나도록 기초·역사를 두껍게.

## 독자
- 한국어 본문, 원어 용어·기호 병기
- 수식은 KaTeX 호환: \( \) / \[ \] 또는 $ $ / $$ $$
- 매 문서: 정의 → 왜 그 정의인가 → 당시 문제 → 수식 → 한계 → 다음으로 넘어가는 이유
- 상단 YAML frontmatter 필수

```yaml
---
id: 00-how-to-read
title: 이 코스를 읽는 법
track: foundation  # foundation | kirchhoff | shannon | bridge
level: foundation  # foundation | core | advanced
prereq: []
summary: 한 줄 요약
---
```

## 문서 목록 (고정 + 기초 보강)

### Phase A — foundation/
- 00-how-to-read.md
- 01-measurement-and-abstraction.md
- 02-math-primer.md          # 확률·로그·급수·선형대수 맛보기 (복습자용으로 친절하게)
- 03-historical-frame.md
- 04-physics-refresh.md      # [보강] 전류·전압·저항·에너지·파동·빛 (오래 쉰 사람용)
- 05-coming-back.md          # [보강] 학습 복귀 가이드, 선수 맵, 추천 경로

### Phase B — kirchhoff/
- k-01-circuits-before.md
- k-02-kcl-kvl.md
- k-03-networks.md
- k-04-spectroscopy.md
- k-05-radiation-laws.md
- k-06-to-planck.md
- k-07-life.md

### Phase C — shannon/
- s-01-boolean-relays.md
- s-02-what-is-information.md
- s-03-entropy.md
- s-04-source-coding.md
- s-05-channel-capacity.md
- s-06-secrecy.md
- s-07-life.md

### Phase D — bridge/
- b-01-conservation-metaphors.md
- b-02-two-entropies.md      # S ≠ H 강조
- b-03-from-blackbody-to-bit.md
- b-04-compare-lives.md
- b-05-further-reading.md

### 공통
- glossary.md (docs 루트)
- README.md (프로젝트 루트, 문서 인덱스)

## 톤
물리학·정보이론 교수가 쓴 교재. 비유는 쓰되 비유가 정의가 되지 않게.
엔트로피 S와 H를 동일시하지 말 것. Bridge에서 명시적 경고.
원논문 장문 복제 금지. 인용·링크·짧은 핵심 구절만.
각 문서 끝에: 「핵심 정리」「연습(1~3)」「더 읽기」「다음 문서」

## 깊이
- foundation: 고교~대학 1학년 복습 + 역사
- core: 전공 3~4학년
- advanced: 입문 대학원 / 원논문 직전
