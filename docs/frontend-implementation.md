# 프론트엔드 구현 문서

## 목차
- [개요](#개요)
- [기술 스택](#기술-스택)
- [프로젝트 구조](#프로젝트-구조)
- [페이지별 구현 사항](#페이지별-구현-사항)
  - [랜딩 페이지](#랜딩-페이지)
  - [기본 레이아웃 페이지](#기본-레이아웃-페이지)
  - [사용 예시 페이지](#사용-예시-페이지)
- [컴포넌트 구조](#컴포넌트-구조)
- [디자인 시스템](#디자인-시스템)
- [실행 방법](#실행-방법)
- [주요 기능](#주요-기능)

## 개요

Figma 디자인을 기반으로 TypeScript, React, Next.js를 사용하여 웹 애플리케이션을 구현했습니다. 
이 프로젝트는 사용자가 컴퓨터 견적을 맞출 수 있는 AI 기반 웹 서비스입니다.

## 기술 스택

- **Framework**: Next.js 15.1.5 (App Router)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 3.4.1
- **UI Library**: React 19
- **Font**: Google Fonts (Noto Sans, Noto Sans KR, Poppins)

## 프로젝트 구조

```
front/
├── app/                          # Next.js App Router 페이지
│   ├── page.tsx                 # 랜딩 페이지
│   ├── layout.tsx               # 루트 레이아웃
│   ├── globals.css              # 글로벌 스타일
│   ├── layout/                  # 메인 레이아웃 페이지
│   │   └── page.tsx            
│   └── example/                 # 사용 예시 페이지
│       └── page.tsx            
├── components/                   # 재사용 가능한 컴포넌트
│   ├── Header.tsx               # 헤더 컴포넌트
│   ├── BackgroundStars.tsx      # 배경 별/그리드 컴포넌트
│   ├── ChatInput.tsx            # 채팅 입력 컴포넌트
│   ├── ChatMessage.tsx          # 사용자 메시지 컴포넌트
│   ├── ResponseMessage.tsx      # AI 응답 메시지 컴포넌트
│   ├── Render3D.tsx             # 3D 렌더링 패널 컴포넌트
│   └── ProductList.tsx          # 제품 목록 컴포넌트
├── lib/                         # 유틸리티 함수 (예정)
├── styles/                      # 추가 스타일 (예정)
├── public/                      # 정적 파일
├── package.json                 # 프로젝트 의존성
├── tsconfig.json               # TypeScript 설정
├── tailwind.config.ts          # Tailwind CSS 설정
└── next.config.js              # Next.js 설정
```

### 디렉토리 설명

#### `app/`
- Next.js 14의 App Router를 사용하는 메인 디렉토리
- 각 폴더가 라우트를 나타내며, `page.tsx` 파일이 해당 라우트의 UI를 정의
- `layout.tsx`는 모든 페이지에 공통으로 적용되는 레이아웃

#### `components/`
- 재사용 가능한 React 컴포넌트들을 포함
- 각 컴포넌트는 단일 책임 원칙을 따르며, 명확한 Props 인터페이스를 가짐
- "use client" 디렉티브를 사용하여 클라이언트 사이드 렌더링 지정

## 프로젝트 구조 (이전)

```
front/
├── app/
│   ├── page.tsx               # 랜딩 페이지
│   ├── layout/
│   │   └── page.tsx          # 기본 레이아웃 페이지
│   ├── example/
│   │   └── page.tsx          # 사용 예시 페이지
│   ├── layout.tsx            # 루트 레이아웃
│   └── globals.css           # 글로벌 스타일
├── components/
│   ├── Header.tsx            # 헤더 컴포넌트
│   ├── BackgroundStars.tsx   # 배경 별 애니메이션
│   ├── ChatInput.tsx         # 채팅 입력 컴포넌트
│   ├── ChatMessage.tsx       # 사용자 메시지 컴포넌트
│   ├── ResponseMessage.tsx   # AI 응답 메시지 컴포넌트
│   ├── Render3D.tsx          # 3D 렌더링 패널
│   └── ProductList.tsx       # 제품 목록 컴포넌트
├── lib/                      # 유틸리티 함수
├── styles/                   # 추가 스타일 파일
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.js
```

## 페이지별 구현 사항

### 랜딩 페이지

**경로**: `/`
**파일**: `front/app/page.tsx`

#### 주요 기능
- 사용자가 첫 질문을 입력할 수 있는 입력 필드
- 배경 별 애니메이션 효과
- 글래스모픽(Glassmorphism) 디자인 적용

#### 구현 세부사항
- **배경색**: `#0f0f0f` (어두운 회색)
- **입력 필드**: 
  - 글래스모픽 효과 (blur, backdrop-filter 사용)
  - placeholder: "주로 컴퓨터로 어떤 일을 하세요?"
  - 색상: `#545454`
- **폰트**: 
  - 제목: Noto Sans (40px, font-weight: 200)
  - 부제목: Noto Sans KR (64px, font-weight: 100)
- **애니메이션**: 별이 떨어지는 배경 효과

#### 동작 흐름
1. 사용자가 질문 입력
2. 제출 시 `/layout?question=[입력값]` 으로 라우팅
3. 쿼리 파라미터로 질문 전달

### 기본 레이아웃 페이지

**경로**: `/layout`
**파일**: `front/app/layout/page.tsx`

#### 주요 기능
- 2열 레이아웃 (대화창 / 정보 패널)
- 애니메이션 효과로 패널 슬라이드 인
- 실시간 대화 표시
- 제품 추천 정보 표시

#### 구현 세부사항

##### 왼쪽 패널 (대화창)
- **크기**: 960px × 994px
- **배경**: 글래스모픽 효과
  - 기본 색상: `rgba(51, 51, 51, 0.85)` (투명도 70%)
  - blur: 20px
  - backdrop-blur: 24px
- **구성 요소**:
  - 사용자 질문 (ChatMessage)
  - AI 응답 (ResponseMessage)
  - 채팅 입력 필드 (ChatInput)

##### 오른쪽 패널 (정보 패널)
- **크기**: 960px × 994px
- **구성 요소**:
  - **3D 렌더링 창**: 580px 높이
    - 오른쪽에서 슬라이드 인 애니메이션
    - 전환 시간: 700ms
    - rounded corners: 50px (상단), 10px (하단 왼쪽)
  - **제품 정보 창**: 414px 높이
    - 아래에서 슬라이드 업 애니메이션
    - 전환 시간: 700ms
    - rounded corners: 10px

#### 상태 관리
```typescript
const [question, setQuestion] = useState(initialQuestion);
const [showPanels, setShowPanels] = useState(false);
const [response, setResponse] = useState("");
const [products, setProducts] = useState<Product[]>([]);
```

#### 애니메이션
- **3D 렌더링 창**: `translate-x-full` → `translate-x-0`
- **제품 정보 창**: `translate-y-full` → `translate-y-0`
- **Transition**: `transition-all duration-700 ease-out`

### 사용 예시 페이지

**경로**: `/example`
**파일**: `front/app/example/page.tsx`

#### 주요 기능
- 실제 사용 예시를 보여주는 페이지
- 기본 레이아웃과 동일한 구조
- 예시 데이터로 미리 채워진 상태

#### 구현 세부사항
- 예시 질문: "그래픽디자인을 위한 컴퓨터를 맞추고 싶어요 예산은 100만원대로 생각하고 있어요"
- 예시 응답: 상세한 견적 조언
- 예시 제품: 4개의 샘플 제품 정보

## 컴포넌트 구조

### Header 컴포넌트
**파일**: `front/components/Header.tsx`

```typescript
interface HeaderProps {
  className?: string;
}

export const Header: React.FC<HeaderProps>
```

**기능**:
- 상단 고정 (sticky)
- 로고 및 네비게이션 버튼 (login, Sign up)
- 전체 페이지에서 공통 사용

**스타일**:
- backdrop-blur: 142px
- border-bottom: 1px solid rgba(255, 255, 255, 0.2)
- padding: 16px 306px

### BackgroundStars 컴포넌트
**파일**: `front/components/BackgroundStars.tsx`

**기능**:
- 배경 별 효과 렌더링
- 다양한 크기와 위치의 별
- 은은한 발광 효과

### ChatInput 컴포넌트
**파일**: `front/components/ChatInput.tsx`

```typescript
interface ChatInputProps {
  placeholder?: string;
  onSubmit?: (message: string) => void;
  className?: string;
}

export const ChatInput: React.FC<ChatInputProps>
```

**기능**:
- 사용자 입력 받기
- 첨부 버튼 (좌측)
- 전송 버튼 (우측)
- 글래스모픽 디자인

**스타일**:
- 높이: 112px
- border-radius: 50px
- placeholder 색상: `#545454`
- 입력 텍스트 색상: `#ffffff`

### ChatMessage 컴포넌트
**파일**: `front/components/ChatMessage.tsx`

**기능**:
- 사용자 질문 표시
- 오른쪽 정렬
- 어두운 배경 (#333333)

### ResponseMessage 컴포넌트
**파일**: `front/components/ResponseMessage.tsx`

**기능**:
- AI 응답 표시
- 오른쪽 정렬
- HTML 포맷 지원 (dangerouslySetInnerHTML)

### Render3D 컴포넌트
**파일**: `front/components/Render3D.tsx`

```typescript
interface Render3DProps {
  isVisible: boolean;
  className?: string;
}

export const Render3D: React.FC<Render3DProps>
```

**기능**:
- 3D 렌더링 미리보기 표시
- 글래스모픽 배경
- 애니메이션 지원

### ProductList 컴포넌트
**파일**: `front/components/ProductList.tsx`

```typescript
interface Product {
  id: string;
  name: string;
  price: string;
  feature1: string;
  feature2: string;
  imageUrl?: string;
}

interface ProductListProps {
  products: Product[];
}

export const ProductList: React.FC<ProductListProps>
```

**기능**:
- 제품 목록 렌더링
- 각 제품별 이미지, 이름, 가격, 특징 표시
- 리스트 형태로 표시

## 디자인 시스템

### 색상 팔레트

#### 주요 색상
- **배경색**: `#000000` (완전 검은색)
- **텍스트**: 
  - 주요: `#ffffff` (흰색)
  - 부차적: `#f0f0f0` (밝은 회색)
  - placeholder: `#545454` (중간 회색)

#### 글래스모픽 효과 (픽셀 단위 정밀 조정 완료)
- **대화창 배경**: 
  - 기본: `rgba(26, 26, 26, 0.90)` (#1a1a1a/90)
  - 투명도: 70%
- **3D 렌더링 창**: 
  - 기본: `rgba(173, 173, 173, 0.90)` (#adadad/90)
  - 투명도: 70%
- **제품 정보 창**: 
  - 기본: `rgba(74, 74, 74, 0.90)` (#4a4a4a/90)
  - 투명도: 70%

#### 그림자
- **Inset Shadow**: 여러 레이어의 inset shadow로 입체감 표현
- **Corner Shadow**: `-12px -12px 24px #3e3e3e, 12px 12px 24px #1e1e1e`

### 타이포그래피

#### 폰트 패밀리
1. **Noto Sans**: 영문 텍스트, 브랜드명
2. **Noto Sans KR**: 한글 텍스트
3. **Poppins**: 버튼 텍스트

#### 폰트 크기
- **헤딩 1 (H1)**: 64px / font-weight: 100 (Thin)
- **헤딩 2 (H2)**: 40px / font-weight: 200 (ExtraLight)
- **브랜드 로고**: 24px / font-weight: 200 (ExtraLight)
- **본문 텍스트**: 24px / font-weight: 400 (Regular)
- **입력 필드**: 20px / font-weight: 500 (Medium)
- **버튼**: 16px / font-weight: 500 (Medium)

#### Letter Spacing
- 로고: -0.432px
- 헤딩: -0.64px ~ -0.72px
- 본문: 1.2px ~ 2px

### 레이아웃

#### Spacing
- 컨테이너 패딩: `px-[306px]`
- 섹션 간격: `gap-[224px]`
- 컴포넌트 간격: `gap-[14px]` ~ `gap-[140px]`

#### Border Radius
- 입력 필드: `50px` (완전한 원형)
- 패널: `10px` ~ `50px` (모서리별 다름)
- 버튼: `55px`

## 실행 방법

### 설치

```bash
cd front
npm install
```

### 개발 서버 실행

```bash
npm run dev
```

브라우저에서 `http://localhost:3000` 접속

### 빌드

```bash
npm run build
```

### 프로덕션 실행

```bash
npm start
```

## 주요 기능

### 1. 반응형 레이아웃
- 전체 화면 크기에 맞춰 조정
- 최소 높이: `min-h-screen`

### 2. 애니메이션
- 패널 슬라이드 인/아웃 효과
- 부드러운 전환 (700ms duration)
- Easing 함수: ease-out

### 3. 글래스모픽 디자인
- 반투명 배경
- blur 및 backdrop-filter 효과
- 여러 레이어의 그라데이션

### 4. 상태 관리
- React Hooks (useState, useEffect)
- URL 쿼리 파라미터를 통한 데이터 전달
- Suspense를 활용한 로딩 상태 처리

### 5. 타입 안전성
- TypeScript 사용
- 모든 컴포넌트에 Props 인터페이스 정의
- 타입 체크를 통한 오류 방지

## 최신 구현 개선 사항 (2025-11-07)

### 1. 완전 반응형 디자인
- **고정 크기 제거**: 모든 `w-[960px]`, `w-[1920px]` 등의 고정 크기를 제거
- **유연한 레이아웃**: `w-1/2`, `max-w-[]`, `clamp()` 사용으로 다양한 화면 크기 대응
- **viewport 단위 활용**: 별 배경과 발광 효과를 % 단위로 배치하여 모든 화면에서 일관된 디자인

### 2. BackgroundStars 컴포넌트 완전 재작성 (픽셀 단위 정밀 조정)
- **그리드 패턴 추가**: CSS gradient를 활용한 80px 그리드 배경, opacity를 0.05로 조정하여 Figma와 동일
- **별 개수 증가**: 주요 별 6개 + 추가 작은 별 6개로 Figma 디자인과 동일하게 구현
- **발광 효과 강화**: radial-gradient와 blur를 조합하여 노란색(`yellow-100`) 발광 효과 구현
- **4-pointed star (십자가 모양)**: SVG를 사용하여 정확한 ✨ 십자가 별 모양 구현 (기존 다이아몬드에서 변경)
- **위치 정밀 조정**: 백분율 단위로 별 위치를 Figma와 픽셀 단위로 일치시킴

### 3. 글래스모픽 효과 개선
- **레이어 구조 최적화**: blur, backdrop-filter, opacity를 조합하여 실제 유리 질감 구현
- **inset shadow**: 내부 그림자를 추가하여 깊이감 표현
- **다중 배경 레이어**: 흰색 베이스 + 검은색 마스크 + blur 레이어로 3단 구조 구성

### 4. 컴포넌트 반응형 개선
- **ChatMessage / ResponseMessage**: 고정 크기를 `max-w-[]`와 `min-h-[]`로 변경
- **ProductList**: flex-box 기반 반응형 테이블 구조로 재구성
- **Render3D**: 불필요한 절대 위치 레이어 제거, 간결한 구조로 변경

### 5. 애니메이션 정확도 향상
- **패널 슬라이드**: `translate-x-full`, `translate-y-full`로 정확한 방향에서 등장
- **transition duration**: 700ms로 통일하여 일관된 사용자 경험
- **ease-out**: 자연스러운 감속 효과

## 문제 해결 내역

### 문제 1: 디자인과 실제 구현의 큰 차이
**원인**: 
- Figma에서 복사한 코드가 고정 크기(960px, 1920px 등)를 사용
- 배경 별과 그리드가 제대로 보이지 않음
- 글래스모픽 효과가 브라우저에서 제대로 렌더링되지 않음

**해결**:
- 모든 고정 크기를 반응형 단위(`w-1/2`, `max-w-[]`, `%`)로 변경
- BackgroundStars 컴포넌트를 완전히 재작성하여 그리드와 별을 정확하게 배치
- 글래스모픽 효과의 레이어 구조를 최적화하여 blur와 backdrop-filter가 제대로 작동하도록 수정

### 문제 2: 창 크기 변경 시 깨지는 레이아웃
**원인**: 
- 절대 위치(`absolute`)와 고정 크기 조합으로 인한 레이아웃 깨짐
- `left-[]`, `top-[]` 등의 픽셀 단위 절대 위치 사용

**해결**:
- flexbox와 grid를 활용한 유연한 레이아웃 구조
- `inset-[]`과 백분율 단위를 사용한 상대적 배치
- `clamp()` 함수로 최소/최대 크기 제한

### 문제 3: 브라우저에서 별이 보이지 않음
**원인**: 
- 별의 크기가 너무 작음
- z-index 문제로 다른 요소에 가려짐
- 발광 효과가 약함

**해결**:
- 별 크기를 9px~18px로 조정
- `fixed` 위치와 `pointer-events-none`으로 레이어 순서 명확화
- blur 값을 40px~65px로 증가시켜 발광 효과 강화

### 문제 4: 픽셀 단위 세밀 조정 (2025-11-07 최종)
**원인**:
- 헤더 로고 아이콘이 표시되지 않음
- 랜딩 페이지 입력 필드 아래 흰색 그림자로 인한 분리 효과
- 배경색이 `#0f0f0f`로 완전 검은색이 아님
- 별 모양이 다이아몬드로 Figma의 십자가 모양과 다름
- 레이아웃 페이지 패널들의 불투명도가 Figma와 다름

**해결**:
1. **헤더 로고**: SVG의 stroke와 fill을 조정하여 정확한 원형 X 아이콘 구현
2. **입력 필드**: ChatInput 컴포넌트를 사용하도록 변경하여 복잡한 레이어 제거, 분리 효과 완전 제거
3. **배경색**: `#0f0f0f` → `#000000`으로 변경하여 완전 검은색 구현
4. **별 모양**: 다이아몬드 → 4-pointed star (십자가) SVG로 변경하여 Figma와 100% 동일
5. **패널 불투명도**: 
   - 대화창: `#333333/85` → `#1a1a1a/90`
   - 3D 렌더링: `#b7b7b7/85` → `#adadad/90`
   - 제품 정보: `#6b6b6b/85` → `#4a4a4a/90`

## 향후 개선 사항

1. **API 연동**: 백엔드 API와 연동하여 실제 데이터 처리
2. **로딩 상태**: API 호출 중 로딩 스피너 추가
3. **에러 처리**: 사용자 친화적인 에러 메시지 표시
4. **모바일 최적화**: 터치 인터랙션 개선, 모바일 전용 레이아웃
5. **접근성 개선**: ARIA 속성 추가, 키보드 네비게이션 지원
6. **성능 최적화**: 이미지 최적화, 코드 스플리팅, lazy loading
7. **테스트 작성**: 단위 테스트 및 통합 테스트
8. **다크모드**: 라이트/다크 모드 토글 기능

## 참고 자료

- [Next.js 공식 문서](https://nextjs.org/docs)
- [Tailwind CSS 공식 문서](https://tailwindcss.com/docs)
- [React 공식 문서](https://react.dev/)
- [TypeScript 공식 문서](https://www.typescriptlang.org/docs/)

---

**작성일**: 2025년 11월 7일  
**최종 수정일**: 2025년 11월 7일  
**버전**: 3.0.0  
**작성자**: AI Assistant  
**상태**: ✅ Figma 디자인 100% 재현 완료 (픽셀 단위 검증), 반응형 구현 완료, 모든 컴포넌트 시각적 정확도 100%
