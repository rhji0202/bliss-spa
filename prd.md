# Bliss Nail Spa & Lash 웹사이트 PRD (Product Requirement Document)

---

## 1. 프로젝트 개요

**프로젝트 이름:** Bliss Nail Spa & Lash 웹사이트 개발  
**목적:**

- Bliss Nail Spa & Lash의 브랜드 가치를 전달하고, 고객들이 쉽게 서비스를 예약할 수 있도록 웹사이트 제작.
- Mangomint 예약 시스템과의 통합을 통해 효율적이고 간편한 예약 기능 제공.
- GSAP 애니메이션을 활용하여 생동감 있고 모던한 사용자 경험 제공.

---

## 2. 주요 기능 및 요구사항

### 2.1 기본 페이지 구성

1. **홈페이지**

   - Bliss Nail Spa & Lash 소개 및 서비스 강조.
   - 주요 서비스(Manicure, Pedicure, Eyelash, Waxing, Massage) 섹션 구성.
   - 예약 CTA(Call to Action) 버튼 제공 (GSAP 애니메이션 적용).

2. **서비스 페이지**

   - 제공하는 각 서비스에 대한 상세 설명 및 관련 이미지 제공.

3. **예약 페이지**

   - Mangomint 예약 시스템을 통합하여 온라인 예약 제공.
   - Mangomint 스크립트를 사용하여 오버레이 형태로 예약 기능 구현.

4. **연락처 페이지**

   - 주소, 전화번호, 영업시간 등 기본 정보 제공.
   - Google Maps API를 사용하여 위치 표시.
   - Gift Certificates(선물권) 관련 정보 제공.

5. **블로그/이벤트 페이지** _(선택 사항)_
   - 프로모션, 할인 정보 및 특별 이벤트를 게시할 수 있는 섹션 구성.

---

### 2.2 UI/UX 및 애니메이션

1. **UI 디자인**

   - Tailwind CSS 또는 Shadcn을 사용하여 간결하고 직관적인 UI 구성.
   - 브랜드 이미지를 반영한 파스텔 톤 색상과 깔끔한 디자인.
   - 모바일, 태블릿, 데스크톱에 최적화된 반응형 디자인 제공.

2. **GSAP 애니메이션**
   - 페이지 로드 시 요소 페이드 인(Fade-in) 효과.
   - 예약 버튼 호버 시 스케일 애니메이션 효과 적용.
   - 스크롤 시 서비스 섹션 카드가 자연스럽게 등장하도록 애니메이션 구성.

---

### 2.3 예약 기능

1. **Mangomint 예약 시스템 통합**
   - HTML `<script>` 태그를 통해 Mangomint API를 통합하여 예약 버튼 클릭 시 오버레이 창에서 예약 진행 가능.
   - 코드 예시:
     ```html
     <script>
       window.Mangomint = window.Mangomint || {};
       window.Mangomint.CompanyId = 207987;
     </script>
     <script src="https://booking.mangomint.com/app.js" async></script>
     ```
   - 예약 링크: [https://booking.mangomint.com/blissnailspalash](https://booking.mangomint.com/blissnailspalash)

---

### 2.4 SEO 및 접근성

1. **SEO 최적화**

   - 서비스 관련 키워드(Manicure, Pedicure, Eyelash 등)를 포함한 메타 태그 구성.
   - Bliss Nail Spa 관련 검색 트래픽 증대를 위한 키워드 활용.

2. **접근성 (WCAG 준수)**
   - 텍스트와 이미지 대비를 강화하여 가독성 확보.
   - 스크린 리더를 고려한 ARIA 태그 적용.

---

## 3. 기술 스택

| **구분**       | **기술/도구**                       |
| -------------- | ----------------------------------- |
| **프론트엔드** | Next.js, Tailwind CSS 또는 Shadcn   |
| **애니메이션** | GSAP (GreenSock Animation Platform) |
| **예약 연동**  | Mangomint API                       |
| **지도**       | Google Maps API                     |
| **백엔드**     | Next.js API Routes (선택 사항)      |
| **배포**       | Vercel                              |

---

## 4. 개발 일정

| **단계**                | **기간** | **설명**                                   |
| ----------------------- | -------- | ------------------------------------------ |
| 기획 및 디자인          | 1주      | 와이어프레임 작성 및 디자인 확정           |
| 프론트엔드 구현         | 2주      | Next.js와 Tailwind CSS 기반 레이아웃 개발  |
| 예약 통합 및 애니메이션 | 1주      | GSAP 애니메이션 구현 및 Mangomint API 통합 |
| 테스트 및 수정          | 1주      | 반응형 테스트, 접근성 및 SEO 검토          |
| 배포                    | 1일      | Vercel을 사용한 배포                       |

---

## 5. 참고 정보

- **가게 이름:** Bliss Nail Spa & Lash
- **주소:** 408 Westport Ave, Norwalk, CT 06851
- **전화번호:** 203-846-2777
- **영업시간:**
  - 월~토: 오전 9:30 ~ 오후 7:00
  - 일요일: 오전 10:00 ~ 오후 6:00
- **기타:** 선물권(Gift Certificates) 판매 가능

**참고 사이트:**  
[https://ashleyspa.com](https://ashleyspa.com)

---

## 6. 참고 사항 및 시각적 요구사항

- 서비스 카드 디자인에 관련 이미지와 텍스트를 포함하여 직관적인 정보 전달.
- 예약 CTA 버튼을 시각적으로 강조하여 클릭 유도.
- 전체적으로 깔끔하고 간결한 레이아웃 구성과 조화로운 색상 사용.
