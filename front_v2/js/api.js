/**
 * API 통신 모듈
 * Gemini AI와 통신하여 PC 부품 추천을 받는다
 */

// Vite 환경 변수 읽기 (import.meta.env는 Vite 빌드 시에만 사용 가능)
const API_KEY = typeof import.meta !== 'undefined' && import.meta.env 
  ? import.meta.env.VITE_API_KEY 
  : 'AIzaSyDRMF-T6SaGgLmfFkHBZ4CGGcmVh6N1Q9U'; // 개발용 임시 키 (프로덕션에서는 반드시 환경 변수 사용)

const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent';

/**
 * Gemini AI에 PC 부품 추천 요청
 * @param {string} userMessage - 사용자 메시지
 * @returns {Promise<{analysis: string, components: Array}>} AI 응답
 */
export async function getPCRecommendation(userMessage) {
  try {
    const response = await fetch(`${GEMINI_API_URL}?key=${API_KEY}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: `사용자 요청: "${userMessage}". 이 요청에 따라 PC 부품 견적을 맞춰주세요. 상세한 분석과 함께 추천 부품 목록을 제공해주세요. JSON 형식으로 응답해주세요: {"analysis": "상세 분석 내용", "components": [{"category": "부품 카테고리", "name": "제품명", "price": "가격", "features": ["특징1", "특징2"]}]}`
          }]
        }],
        generationConfig: {
          temperature: 0.7,
          topK: 40,
          topP: 0.95,
          maxOutputTokens: 2048,
          responseMimeType: "application/json"
        },
        systemInstruction: {
          parts: [{
            text: "당신은 'Spckit AI'입니다. 사용자의 요구사항, 예산, 사용 목적에 따라 맞춤형 PC 부품을 추천하는 전문 AI 어시스턴트입니다. 항상 한국어로 답변해야 합니다."
          }]
        }
      })
    });

    if (!response.ok) {
      throw new Error(`API 오류: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    
    // Gemini 응답 파싱
    if (!data.candidates || !data.candidates[0] || !data.candidates[0].content) {
      throw new Error('응답 형식이 올바르지 않습니다');
    }

    const textContent = data.candidates[0].content.parts[0].text;
    const parsedResponse = JSON.parse(textContent);

    // 응답 검증
    if (!parsedResponse.analysis || !Array.isArray(parsedResponse.components)) {
      throw new Error('응답 데이터 구조가 올바르지 않습니다');
    }

    // 부품 데이터 검증 및 필터링
    const validComponents = parsedResponse.components.filter(comp => {
      return comp && 
             typeof comp.category === 'string' &&
             typeof comp.name === 'string' &&
             typeof comp.price === 'string' &&
             Array.isArray(comp.features);
    });

    return {
      analysis: parsedResponse.analysis,
      components: validComponents
    };

  } catch (error) {
    console.error('API 호출 오류:', error);
    throw new Error('AI로부터 응답을 받는데 실패했습니다. 잠시 후 다시 시도해주세요.');
  }
}

/**
 * 가격 문자열에서 숫자 추출
 * @param {string} priceStr - 가격 문자열 (예: "약 450,000원")
 * @returns {number} 숫자 가격
 */
export function extractPrice(priceStr) {
  if (!priceStr) return 0;
  const numbers = priceStr.replace(/[^\d]/g, '');
  return parseInt(numbers, 10) || 0;
}

/**
 * 숫자를 원화 형식으로 변환
 * @param {number} price - 숫자 가격
 * @returns {string} 포맷된 가격 문자열
 */
export function formatPrice(price) {
  return price.toLocaleString('ko-KR') + '원';
}

