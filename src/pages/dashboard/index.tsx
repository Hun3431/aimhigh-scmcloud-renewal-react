import { cn } from "cn-func";
import Container from "../../components/component/container";
import {
  DocumentCheckIcon,
  OfferAmountIcon,
  ReportIcon,
} from "../../components/icons/flowmate";
import ChecklistIcon from "../../components/icons/flowmate/checkList";
import ChevronArrowIcon from "../../components/icons/flowmate/chevronArrow";
import ArrowIcon from "../../components/icons/arrowIcon";

const DashBoardMainPage = () => {
  return (
    <div className="px-2 pt-8 pb-4">
      <div className="grid grid-cols-4 gap-x-4 gap-y-6">
        <Container>
          <div className="flex flex-row items-center gap-4">
            <div className="bg-purple-100 rounded-lg p-2.5 text-purple-700">
              <OfferAmountIcon size={18} />
            </div>
            <div className="flex-1">이번 달 견적 요청</div>
            <div className="bg-blue-200 rounded-md px-2 py-1 text-xs text-blue-700">
              Monthly
            </div>
          </div>
          <div className="text-2xl font-semibold">71</div>
        </Container>
        <Container>
          <div className="flex flex-row items-center gap-4">
            <div className="bg-green-100 rounded-lg p-3 text-green-700">
              <DocumentCheckIcon size={18} />
            </div>
            <div className="flex-1">이번 달 확정 견적</div>
            <div className="bg-blue-200 rounded-md px-2 py-1 text-xs text-blue-700">
              Monthly
            </div>
          </div>
          <div className="text-2xl font-semibold">20</div>
        </Container>
        <Container>
          <div className="flex flex-row items-center gap-4">
            <div className="bg-yellow-200 rounded-lg p-3 text-yellow-700">
              <ChecklistIcon size={18} />
            </div>
            <div className="flex-1">이번 달 수주</div>
            <div className="bg-blue-200 rounded-md px-2 py-1 text-xs text-blue-700">
              Monthly
            </div>
          </div>
          <div className="text-2xl font-semibold">38</div>
        </Container>
        <Container className="bg-blue-50">
          <div className="flex flex-row items-center gap-4">
            <div className="bg-blue-100 rounded-lg p-3 text-blue-700">
              <ReportIcon size={18} />
            </div>
            <div className="flex-1">평균 수주 전환 소요일</div>
            <div className="bg-blue-200 rounded-md px-2 py-1 text-xs text-blue-700">
              Total
            </div>
          </div>
          <div className="text-2xl font-semibold">18</div>
        </Container>
        <Container className="col-span-4">
          <div className="flex flex-row items-center gap-4 text-lg font-semibold">
            Daily Exchange Rate
            <span className="text-sm font-normal">환율</span>
          </div>
          <ExchangeRateList />
        </Container>
        <Container className="col-span-4">
          <div className="flex flex-row items-center gap-4 text-lg font-semibold">
            Pending Inquiry
            <span className="text-sm font-normal">보류 주문</span>
          </div>
          <div className="flex flex-row items-center justify-between text-gray-7s00">
            <div className="text-xs">총 2건의 문서</div>
            <button className="flex items-center gap-2 p-2 pl-4 bg-gray-200 rounded-2xl text-sm">
              ViewAll <ArrowIcon direction="right" size={16} />
            </button>
          </div>
          <PendingInquiryList />
        </Container>
      </div>
    </div>
  );
};

interface ExchangeRate {
  currency: string;
  rate: number;
  change: number;
}

const exchangeRateList: ExchangeRate[] = [
  { currency: "USD", rate: 1433.5, change: -0.32 },
  { currency: "JPY", rate: 1007.06, change: +0.16 },
  { currency: "EUR", rate: 1633.98, change: -0.29 },
  { currency: "CNY", rate: 197.26, change: 0.12 },
  { currency: "AED", rate: 390.33, change: 0.31 },
  { currency: "GBP", rate: 1922.43, change: 0 },
];

const ExchangeRateList = () => {
  return (
    <div className="grid grid-cols-6 gap-2">
      {exchangeRateList.map((item, index) => (
        <div
          className={cn(
            "flex flex-col gap-1",
            "border border-gray-200 rounded-lg p-3",
            ""
          )}
          key={index}
        >
          <div className="text-base">{item.currency}</div>
          <div className="flex items-row justify-between">
            <div className="text-sm font-medium">
              {`₩ ${item.rate.toLocaleString("ko-KR", {
                maximumFractionDigits: 2,
              })}`}
            </div>
            <div
              className={cn(
                "flex items-center gap-0.5 text-xs",
                item.change === 0
                  ? "text-gray-500"
                  : item.change > 0
                  ? "text-green-500"
                  : "text-red-500"
              )}
            >
              {item.change === 0 ? (
                <>-</>
              ) : (
                <ChevronArrowIcon
                  direction={item.change > 0 ? "up" : "down"}
                  size={8}
                />
              )}
              {`${item.change.toFixed(2)}%`}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

interface Inquiry {
  DocumentNumber: string;
  RegisterDate: string;
  CompanyName: string;
  VesselName: string;
  DocumentStatus: string[];
  Remark: string;
}
const pendingInquiryList: Inquiry[] = [
  {
    DocumentNumber: "BAS250430-002",
    RegisterDate: "2025-04-30",
    CompanyName: "TEST COMPANY",
    VesselName: "",
    DocumentStatus: ["VENDOR_SELECTED"],
    Remark: "WORLD BEST VESSEL",
  },
  {
    DocumentNumber: "BAS250428-007",
    RegisterDate: "2025-04-28",
    CompanyName: "TEST_ADDR",
    VesselName: "test remark",
    DocumentStatus: ["VENDOR_SELECTED"],
    Remark: "VESSEL TEST",
  },
];

const PendingInquiryList = () => {
  return (
    <div className="grid grid-cols-6 rounded-t-xl overflow-hidden text-sm">
      {Object.keys(pendingInquiryList[0]).map((item, index) => (
        <div
          key={index}
          className="flex justify-between p-4 pr-0 bg-gray-50 border-b border-gray-200 font-medium"
        >
          {item}
          {index !== Object.keys(pendingInquiryList[0]).length - 1 && (
            <div className="border-r border-gray-200" />
          )}
        </div>
      ))}
      {pendingInquiryList.map((item, index) => (
        <>
          <div
            className="col-start-1 p-4 bg-white border-b border-gray-200 text-nowrap"
            key={index}
          >
            {item.DocumentNumber}
          </div>
          <div
            className="col-start-2 p-4 bg-white border-b border-gray-200 text-nowrap"
            key={index + 1}
          >
            {item.RegisterDate}
          </div>
          <div
            className="col-start-3 p-4 bg-white border-b border-gray-200 text-nowrap"
            key={index}
          >
            {item.VesselName}
          </div>
          <div
            className="col-start-4 p-4 bg-white border-b border-gray-200 text-nowrap"
            key={index}
          >
            {item.CompanyName}
          </div>
          <div
            className="col-start-5 p-4 bg-white border-b border-gray-200 text-nowrap gap-1 flex"
            key={index}
          >
            {item.DocumentStatus.map((status, idx) => (
              <span
                key={idx}
                className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs"
              >
                {status}
              </span>
            ))}
          </div>
          <div
            className="col-start-6 p-4 bg-white border-b border-gray-200 text-nowrap"
            key={index}
          >
            {item.Remark}
          </div>
        </>
      ))}
    </div>
  );
};

export default DashBoardMainPage;
