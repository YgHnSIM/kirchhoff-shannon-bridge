# 용어집 (Glossary)

「두 엔트로피」(Kirchhoff–Shannon Bridge) 핵심 용어.  
형식: **한글** | English | 짧은 정의 | 주요 트랙

트랙 약어: F = foundation, K = kirchhoff, S = shannon, B = bridge

| # | 한글 | English (기호) | 정의 | 트랙 |
|---|------|----------------|------|------|
| 1 | 전류 | current (\(I\)) | 단위 시간당 단면을 통과하는 전하량. SI 단위 A. | F, K |
| 2 | 전압·전위차 | voltage, potential difference (\(V\)) | 두 점 사이 전하당 전기적 위치에너지 차. 단위 V. | F, K |
| 3 | 저항 | resistance (\(R\)) | 옴적 소자에서 \(V/I\). 단위 \(\Omega\). | F, K |
| 4 | 옴의 법칙 | Ohm’s law | 옴적 소자의 \(V=IR\). 위상 법칙(KCL/KVL)과 구분. | F, K |
| 5 | 전력 | power (\(P\)) | 단위 시간당 에너지. 회로에서 \(P=VI\). | F, K |
| 6 | 전하 | charge (\(q\)) | 전기력의 원인량. 전류의 적분. 단위 C. | F, K |
| 7 | 키르히호프 전류법칙 | Kirchhoff’s current law (KCL) | 마디로 들어오는 전류의 대수합이 0(전하 보존의 회로형). | K |
| 8 | 키르히호프 전압법칙 | Kirchhoff’s voltage law (KVL) | 닫힌 고리를 따라 전위차의 대수합이 0. | K |
| 9 | 마디 | node | 회로에서 두 개 이상 소자가 만나는 점. | K |
| 10 | 고리·루프 | loop | 회로에서 닫힌 경로. | K |
| 11 | 집중정수 회로 | lumped circuit | 파장에 비해 작아 공간 지연을 무시하는 회로 모델. | K |
| 12 | 분광·분광학 | spectroscopy | 빛을 파장·진동수별로 나눠 물질을 읽는 방법. | K |
| 13 | 스펙트럼선 | spectral line | 원자·분자가 특정 진동수에서 보이는 날카로운 흡수/방출. | K |
| 14 | 흑체 | blackbody | 입사 복사를 모두 흡수하는 이상체; 공동 구멍으로 근사. | K, B |
| 15 | 복사 | radiation | 전자기파 형태로 에너지가 전달되는 과정. | K |
| 16 | 플랑크 상수 | Planck’s constant (\(h\)) | \(E=h\nu\)의 비례 상수. 양자 스케일의 기본량. | K, B |
| 17 | 열역학 엔트로피 | thermodynamic entropy (\(S\)) | 열역학·통계역학의 상태량. 가역열 \(\mathrm{d}S=\delta Q_{\mathrm{rev}}/T\) 등과 연결. **\(H\)와 동일시하지 않음.** | K, B |
| 18 | 정보·자기정보 | information, self-information (\(I(x)\)) | \(I(x)=-\log p(x)\). 드문 사건의 정보량이 큼. | S |
| 19 | 섀넌 엔트로피 | Shannon entropy (\(H\)) | \(H(X)=-\sum p(x)\log p(x)\). 분포의 평균 불확실성. | S, B |
| 20 | 비트 | bit | \(\log_2\)를 쓸 때의 정보량 단위. | S |
| 21 | 내트 | nat | 자연로그를 쓸 때의 정보량 단위. | S |
| 22 | 확률분포 | probability distribution (\(p\)) | \(p\ge 0\), \(\sum p=1\)인 가능 결과의 가중. | F, S |
| 23 | 기댓값 | expectation (\(\mathbb{E}\)) | \(\sum g(x)p(x)\). \(H\)는 \(-\log p\)의 기댓값. | F, S |
| 24 | 조건부 엔트로피 | conditional entropy (\(H(X\mid Y)\)) | \(Y\)를 알게 된 뒤 남는 \(X\)의 불확실성. | S |
| 25 | 상호정보 | mutual information (\(I(X;Y)\)) | \(H(X)-H(X\mid Y)\). 한 변수가 다른 변수에 대해 알려 주는 양. | S, B |
| 26 | 정보원 | source | 기호를 확률적으로 내는 모델. | S |
| 27 | 채널 | channel | 입력 \(X\)를 출력 \(Y\)로 보내는 잡음·왜곡 모델 \(p(y\mid x)\). | S |
| 28 | 채널 용량 | channel capacity (\(C\)) | \(\max_{p(x)} I(X;Y)\). 믿을 수 있는 전송률의 상한. | S |
| 29 | 소스 코딩 | source coding | 엔트로피에 가깝게 평균 길이를 줄이는 무손실(또는 허용 왜곡) 압축. | S |
| 30 | 불 대수 | Boolean algebra | 논리합·논리곱·부정으로 참/거짓을 다루는 대수. 릴레이·디지털의 뼈대. | S |
| 31 | 릴레이 | relay | 전자석으로 접점을 여닫는 스위치. Shannon이 논리와 연결. | S |
| 32 | 로그 | logarithm (\(\log\)) | 곱을 덧셈으로 바꾸는 함수. 정보량의 가법성 근거. | F, S |
| 33 | 파동 | wave | 진동이 지연되어 퍼져 나가는 현상. \(v=f\lambda\). | F, K |
| 34 | 진동수·주파수 | frequency (\(f,\nu\)) | 초당 진동 횟수. 빛에서 \(E=h\nu\). | F, K |
| 35 | 파장 | wavelength (\(\lambda\)) | 한 주기 동안 진행한 거리. | F, K |
| 36 | 에너지 | energy | 일을 할 수 있는 용량의 장부. 단위 J. | F, K |
| 37 | 측정 | measurement | 현상에 수·기호를 대응시키는 절차. | F |
| 38 | 추상화 | abstraction | 법칙에 필요한 기호만 남기고 버리는 행위. | F |
| 39 | 보존 법칙 | conservation law | 어떤 양이 닫힌 계에서 일정하거나, 出入이 균형을 이룸. | K, B |
| 40 | 두 엔트로피 | two entropies | 이 코스의 별칭; \(S\)(열역학)와 \(H\)(정보)를 잇되 동일시하지 않음. | B |
| 41 | 의미론(의미) | semantics | 메시지의 「뜻」. Shannon 1948은 전송 공학에서 일단 제외. | S, B |
| 42 | 잡음 | noise | 채널에서 입력을 훼손하는 무작위·미지 성분. | S |
| 43 | 대역폭 | bandwidth | 신호가 차지하는 주파수 폭. 용량·통신 한계와 관련. | S |
| 44 | 행렬 | matrix | 연립 선형방정식을 압축해 쓰는 수 배열. | F, K |
| 45 | 기하급수 | geometric series | \(\sum r^n=1/(1-r)\) (\(|r|<1\)). 복사 유도에 등장. | F, K |

## 사용 메모

- 본문 최초 등장 시 **한글(English, 기호)** 병기 원칙은 `STYLE.md`를 따른다.
- \(S\)와 \(H\) 항목을 함께 읽을 때 **B 트랙의 경고**를 우선한다.
- 용어가 늘어나면 이 표를 확장하되, 정의는 한두 문장을 넘기지 않는다.

## 더 읽기

- Cover & Thomas, *Elements of Information Theory*, 2006 — 용어의 정식 정의.
- Shannon, 1948 — \(H\), 채널, 용량의 원천.
- 표준 회로·현대물리 교재 — KCL/KVL, 흑체, \(h\).
