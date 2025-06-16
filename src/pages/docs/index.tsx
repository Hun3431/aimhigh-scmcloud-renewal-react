import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const text = `본 프로젝트는 바스코리아의 무역 SCM 클라우드 프로그램의 UX/UI를 개선하여 사용자 친화적인 인터페이스로 재구성하는 것을 목표로 합니다.

- 운영기관명 : (주)워크잡
- 제안기업명 : 주식회사 바스코리아
- 프로젝트명 : 무역 SCM 클라우드 프로그램 UX/UI 디자인 개선

해당 디자인 시스템은 반복되는 UI 패턴을 모듈화하고, 재사용 가능한 컴포넌트를 제공하여 개발자와 디자이너가 협업할 수 있는 환경을 조성합니다. 또한, 일관성과 접근성을 고려하여 다양한 제품 환경에서도 안정적인 UI를 구현할 수 있도록 설계되었습니다.

Tailwind CSS v4를 기반으로 구축되었으며, cn-func을 사용하여 Tailwind CSS 클래스 유연하게 관리합니다.

사용된 라이브러리
- Node 23.7.0
- React 19.0.0
- Vite 6.0.5
- TypeScript 5.6.2
- tailwind css 4.0.1
`;

const Docs = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname !== "/docs/introduction") {
      navigate("/docs/introduction");
    }
  }, []);

  return <div className="text-lg whitespace-pre-wrap text-balance">{text}</div>;
};

export default Docs;
