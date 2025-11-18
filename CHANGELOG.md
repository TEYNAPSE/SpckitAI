# Changelog

## [2.0.0] - 2025-11-18

### 🎉 주요 변경사항

프론트엔드를 React에서 순수 HTML/CSS/JavaScript로 전면 재작성했습니다.

### ✨ 추가된 기능

- **4분할 레이아웃**: 채팅, 선택된 부품, 3D 뷰어(준비 중), 추천 부품으로 구성
- **선택된 부품 관리**: 클릭으로 부품 선택 및 제거, 총 가격 자동 계산
- **개선된 UI/UX**: Bolt.new 스타일 기반의 모던한 디자인
- **타이핑 애니메이션**: AI 응답의 자연스러운 표시
- **부품 카드**: 카테고리별 아이콘, 특징 태그, 가격 표시

### 🔄 변경된 내용

- React → 순수 HTML/CSS/JavaScript로 마이그레이션
- TypeScript → JavaScript (ES6+)로 변경
- 3분할 → 4분할 레이아웃으로 확장
- Tailwind CSS → 커스텀 CSS로 변경
- 컴포넌트 기반 → 모듈 기반 JavaScript

### 🗂️ 파일 구조

```
SpckitAI/
├── front_v2/              # 새 프론트엔드 (v2)
│   ├── index.html         # 랜딩 페이지
│   ├── builder.html       # 빌더 페이지
│   ├── landing.css        # 랜딩 스타일
│   ├── builder.css        # 빌더 스타일
│   ├── js/
│   │   ├── landing.js
│   │   ├── builder.js
│   │   └── api.js
│   └── images/
├── old_react_frontend/    # 구 React 프론트엔드 (백업)
├── scripts/
│   └── build.js           # 빌드 스크립트
├── package.json
├── vite.config.ts
└── README.md
```

### 📦 의존성

- React 관련 패키지 제거
- @google/genai 유지
- Vite 개발 서버 유지

### 🚀 실행 방법

```bash
# 개발 서버 실행
npm run dev

# 빌드
npm run build

# 미리보기
npm run preview
```

### 🔧 기술 스택

- **프론트엔드**: HTML5, CSS3, JavaScript (ES6+)
- **빌드**: Vite
- **AI**: Google Gemini 2.0 Flash
- **스타일**: CSS Variables, Flexbox, Grid

## [1.0.0] - 2025-11-XX

### 초기 버전 (React 기반)

- React + TypeScript 기반 프론트엔드
- Tailwind CSS 스타일링
- Gemini AI 통합
- 3분할 레이아웃 (채팅, 3D 뷰어, 부품 리스트)

