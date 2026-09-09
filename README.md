# Kirchhoff–Shannon Bridge — 「두 엔트로피」

> **사이트:** [https://yghnsim.github.io/kirchhoff-shannon-bridge/](https://yghnsim.github.io/kirchhoff-shannon-bridge/)  
> **경고:** 열역학 엔트로피 \(S\) ≠ 섀넌 엔트로피 \(H\).

Gustav Kirchhoff의 회로·분광·복사 줄기와 Claude Shannon의 정보이론 줄기를 잇는 **한국어 심화 미니 코스**입니다.  
대학 고학년~초급 대학원 깊이를 목표로 하며, 학교 졸업 후 오래 쉰 학습자도 **Phase A(foundation)** 만으로 다시 걸을 수 있게 기초를 두껍게 두었습니다.

> **핵심 경고:** 열역학 엔트로피 \(S\)와 섀넌 엔트로피 \(H\)는 **같은 양이 아닙니다.** Bridge 트랙에서 명시적으로 다룹니다.

## 웹 사이트 (Astro)

Dual Rail 디자인 — cream paper / ink / copper(키르히호프) / cyan(섀넌). 실험 노트 미학.

| 경로 | 내용 |
|------|------|
| `/` | 듀얼 레일 입장 + 복귀·전문가 CTA |
| `/path/` | 전체 학습 경로 |
| `/foundation/[slug]/` 등 | `docs/` 커리큘럼 렌더 |
| `/glossary/` | 용어집 |
| `/lab/` | \(H(p)\) · 직렬 저항 KCL/KVL · BSC 용량 위젯 |

### 로컬 실행

```bash
npm install
npm run dev      # 개발 서버
npm run build    # 정적 빌드 → dist/
npm run preview  # 빌드 미리보기
```

Node.js **≥ 22.12** 필요.

### GitHub Pages 배포

워크플로: `.github/workflows/deploy.yml` (GitHub Actions → Pages).

1. 저장소 **Settings → Pages**
2. **Source** 를 **GitHub Actions** 로 선택
3. `main` 푸시 후 Actions 탭에서 워크플로 성공 확인
4. 사이트 URL: **https://yghnsim.github.io/kirchhoff-shannon-bridge/**

`astro.config.mjs` 의 `site` / `base` 가 위 URL과 맞춰져 있습니다.

---

## 이 저장소는


| 항목 | 내용 |
|------|------|
| 언어 | 한국어 본문, 용어·기호 영어 병기 |
| 수식 | KaTeX 호환 `\(` `\)` / `\[` `\]` |
| 문서 골격 | 정의 → 왜 → 역사/동기 → 수식 → 한계 → 다음 |
| 계약 | `CURRICULUM.md`, `STYLE.md` |

## 빠른 시작

1. [docs/foundation/00-how-to-read.md](docs/foundation/00-how-to-read.md) — 읽는 법  
2. 오래 쉬었다면 [05-coming-back.md](docs/foundation/05-coming-back.md)의 자기진단  
3. [docs/glossary.md](docs/glossary.md) — 용어를 옆에 두고 본진 진입  

---

## 문서 인덱스

### Phase A — foundation (기초)

| 문서 | 제목 | 상태 |
|------|------|------|
| [00-how-to-read.md](docs/foundation/00-how-to-read.md) | 이 코스를 읽는 법 | 있음 |
| [01-measurement-and-abstraction.md](docs/foundation/01-measurement-and-abstraction.md) | 측정과 추상화 | 있음 |
| [02-math-primer.md](docs/foundation/02-math-primer.md) | 수학 입문 복습 | 있음 |
| [03-historical-frame.md](docs/foundation/03-historical-frame.md) | 역사적 프레임 | 있음 |
| [04-physics-refresh.md](docs/foundation/04-physics-refresh.md) | 물리학 복습 (전류·전압·저항·에너지·파동·빛) | 있음 |
| [05-coming-back.md](docs/foundation/05-coming-back.md) | 학습 복귀 가이드 | 있음 |

### Phase B — kirchhoff

| 문서 | 제목 | 상태 |
|------|------|------|
| [k-01-circuits-before.md](docs/kirchhoff/k-01-circuits-before.md) | 옴 시대와 회로, 키르히호프 이전 | 있음 |
| [k-02-kcl-kvl.md](docs/kirchhoff/k-02-kcl-kvl.md) | KCL · KVL | 있음 |
| [k-03-networks.md](docs/kirchhoff/k-03-networks.md) | 회로망 | 있음 |
| [k-04-spectroscopy.md](docs/kirchhoff/k-04-spectroscopy.md) | 분광 | 있음 |
| [k-05-radiation-laws.md](docs/kirchhoff/k-05-radiation-laws.md) | 복사 법칙 | 있음 |
| [k-06-to-planck.md](docs/kirchhoff/k-06-to-planck.md) | 흑체에서 플랑크로 | 있음 |
| [k-07-life.md](docs/kirchhoff/k-07-life.md) | 키르히호프의 삶 | 있음 |

### Phase C — shannon

| 문서 | 제목 | 상태 |
|------|------|------|
| [s-01-boolean-relays.md](docs/shannon/s-01-boolean-relays.md) | 불 대수와 릴레이 | 있음 |
| [s-02-what-is-information.md](docs/shannon/s-02-what-is-information.md) | 정보란 무엇인가 | 있음 |
| [s-03-entropy.md](docs/shannon/s-03-entropy.md) | 섀넌 엔트로피 \(H\) | 있음 |
| [s-04-source-coding.md](docs/shannon/s-04-source-coding.md) | 소스 코딩 | 있음 |
| [s-05-channel-capacity.md](docs/shannon/s-05-channel-capacity.md) | 채널 용량 | 있음 |
| [s-06-secrecy.md](docs/shannon/s-06-secrecy.md) | 비밀 통신의 정보이론 | 있음 |
| [s-07-life.md](docs/shannon/s-07-life.md) | 섀넌의 삶 | 있음 |

### Phase D — bridge

| 문서 | 제목 | 상태 |
|------|------|------|
| [b-01-conservation-metaphors.md](docs/bridge/b-01-conservation-metaphors.md) | 보존의 은유 | 있음 |
| [b-02-two-entropies.md](docs/bridge/b-02-two-entropies.md) | 두 엔트로피 (S ≠ H) | 있음 |

| [b-03-from-blackbody-to-bit.md](docs/bridge/b-03-from-blackbody-to-bit.md) | 흑체에서 비트로 | 있음 |
| [b-04-compare-lives.md](docs/bridge/b-04-compare-lives.md) | 두 생애 비교 | 있음 |
| [b-05-further-reading.md](docs/bridge/b-05-further-reading.md) | 더 읽기 | 있음 |

### 공통

| 문서 | 설명 | 상태 |
|------|------|------|
| [docs/glossary.md](docs/glossary.md) | 핵심 용어 45항 내외 | 있음 |
| [CURRICULUM.md](CURRICULUM.md) | 커리큘럼 계약 | 있음 |
| [STYLE.md](STYLE.md) | 문체·형식 | 있음 |
| [README.md](README.md) | 이 파일 | 있음 |

---

## 추천 학습 경로 (요약)

- **기본:** foundation 00→05 → kirchhoff → shannon → bridge  
- **복귀자:** [05-coming-back.md](docs/foundation/05-coming-back.md)의 경로 α–δ  
- **절대 금지에 가까운 것:** foundation·양 트랙 없이 \(S=H\)로 단정하기  

## 인용·저작

원논문 장문 복제를 하지 않습니다. 잘 알려진 1차·2차 문헌(제목·연도)만 안내합니다.  
예: Ohm (1827), Shannon (1948), Cover & Thomas (2006), Feynman Lectures.

## 기여·범위

- Phase A–D 기초자료(`docs/`)는 작성 완료.  
- 다음 단계: Astro 사이트 스캐폴드 → docs 주입 → GitHub Pages 배포.
