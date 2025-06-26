import { useEffect, useRef, useState } from "react";
import ArrowIcon from "../../../components/icons/arrowIcon";
import { cn } from "cn-func";
import Button from "../../../components/form/button";
import Input from "../../../components/form/input";
import { CalendarIcon } from "../../../components/icons/flowmate";
import { useNavigate } from "react-router-dom";

const DashboardRequestPage = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const handleNewRequest = () => {
    // Logic for creating a new request
    navigate("/dashboard/request/new");
  };
  return (
    <div className="px-2 pt-8 pb-4">
      <div className="flex flex-col gap-4 w-full p-4 bg-white rounded-lg border-2 border-gray-300">
        <div className="flex justify-between">
          <div className="flex gap-4 items-center text-2xl font-bold">
            Request
            <span className="text-sm font-normal">견적 요청</span>
          </div>
          <div className="flex gap-2">
            <Button onClick={handleNewRequest}>New Request</Button>
            <Button onClick={handleNewRequest}>New Complex Request</Button>
          </div>
        </div>
        <div>
          <div
            className={cn(
              "grid grid-cols-2 gap-2",
              "overflow-hidden duration-300",
              isOpen ? "max-h-64" : "max-h-0"
            )}
          >
            <div className="flex gap-2 my-1">
              <select className="h-8 px-1 border border-gray-300 rounded-lg">
                <option value="all">All</option>
                <option value="general">General Requests</option>
                <option value="complex">Complex Requests</option>
              </select>
              <Input placeholder="Search..." className="flex-1" />
            </div>
            <div className="flex gap-2 my-1">
              <div className="flex-1 flex flex-row items-center justify-between px-2 border border-gray-300 rounded-lg text-gray-500">
                <div>2024-10-30</div>
                <CalendarIcon size={16} />
              </div>
              <div className="flex-1 flex flex-row items-center justify-between px-2 border border-gray-300 rounded-lg text-gray-500">
                <div>2025-6-22</div>
                <CalendarIcon size={16} />
              </div>
              <Button>Search</Button>
            </div>
          </div>
          <div
            className="flex justify-center items-center cursor-pointer text-gray-500"
            onClick={() => setIsOpen(!isOpen)}
          >
            <ArrowIcon direction={isOpen ? "up" : "down"} size={20} />
          </div>
        </div>
        <RequestList />
      </div>
    </div>
  );
};

interface Request {
  DocumentNumber: string;
  RegisterDate: string;
  Customer: string;
  REFNo: string;
  VesselName: string;
  Remark: string;
  DocumentType: string[];
  DocumentStatus: string[];
}

const requestList: Request[] = [
  {
    DocumentNumber: "BAS250430-002",
    RegisterDate: "2025-04-30",
    Customer: "TEST COMPANY",
    REFNo: "REF123456",
    VesselName: "TEST VESSEL",
    Remark: "TEST REMARK",
    DocumentType: ["GENERAL"],
    DocumentStatus: ["VENDOR_SELECTED"],
  },
  {
    DocumentNumber: "BAS250428-007",
    RegisterDate: "2025-04-28",
    Customer: "TEST_ADDR",
    REFNo: "REF654321",
    VesselName: "TEST VESSEL 2",
    Remark: "VESSEL TEST",
    DocumentType: ["GENERAL"],
    DocumentStatus: ["VENDOR_SELECTED"],
  },
  {
    DocumentNumber: "BAS250427-003",
    RegisterDate: "2025-04-27",
    Customer: "TEST COMPANY 2",
    REFNo: "REF789012",
    VesselName: "TEST VESSEL 3",
    Remark: "TEST REMARK 2",
    DocumentType: ["GENERAL"],
    DocumentStatus: ["VENDOR_SELECTED"],
  },
  {
    DocumentNumber: "BAS250426-001",
    RegisterDate: "2025-04-26",
    Customer: "TEST COMPANY 3",
    REFNo: "REF345678",
    VesselName: "TEST VESSEL 4",
    Remark: "TEST REMARK 3",
    DocumentType: ["GENERAL"],
    DocumentStatus: ["VENDOR_SELECTED"],
  },
  {
    DocumentNumber: "BAS250425-005",
    RegisterDate: "2025-04-25",
    Customer: "TEST COMPANY 4",
    REFNo: "REF901234",
    VesselName: "TEST VESSEL 5",
    Remark: "TEST REMARK 4",
    DocumentType: ["GENERAL"],
    DocumentStatus: ["VENDOR_SELECTED"],
  },
  {
    DocumentNumber: "BAS250424-008",
    RegisterDate: "2025-04-24",
    Customer: "TEST COMPANY 5",
    REFNo: "REF567890",
    VesselName: "TEST VESSEL 6",
    Remark: "TEST REMARK 5",
    DocumentType: ["GENERAL"],
    DocumentStatus: ["VENDOR_SELECTED"],
  },
  {
    DocumentNumber: "BAS250423-004",
    RegisterDate: "2025-04-23",
    Customer: "TEST COMPANY 6",
    REFNo: "REF234567",
    VesselName: "TEST VESSEL 7",
    Remark: "TEST REMARK 6",
    DocumentType: ["GENERAL"],
    DocumentStatus: ["VENDOR_SELECTED"],
  },
  {
    DocumentNumber: "BAS250422-006",
    RegisterDate: "2025-04-22",
    Customer: "TEST COMPANY 7",
    REFNo: "REF890123",
    VesselName: "TEST VESSEL 8",
    Remark: "TEST REMARK 7",
    DocumentType: ["GENERAL"],
    DocumentStatus: ["VENDOR_SELECTED"],
  },
  {
    DocumentNumber: "BAS250421-009",
    RegisterDate: "2025-04-21",
    Customer: "TEST COMPANY 8",
    REFNo: "REF345678",
    VesselName: "TEST VESSEL 9",
    Remark: "TEST REMARK 8",
    DocumentType: ["GENERAL"],
    DocumentStatus: ["VENDOR_SELECTED"],
  },
  {
    DocumentNumber: "BAS250420-010",
    RegisterDate: "2025-04-20",
    Customer: "TEST COMPANY 9",
    REFNo: "REF123456",
    VesselName: "TEST VESSEL 10",
    Remark: "TEST REMARK 9",
    DocumentType: ["GENERAL"],
    DocumentStatus: ["VENDOR_SELECTED"],
  },
  {
    DocumentNumber: "BAS250419-011",
    RegisterDate: "2025-04-19",
    Customer: "TEST COMPANY 10",
    REFNo: "REF654321",
    VesselName: "TEST VESSEL 11",
    Remark: "TEST REMARK 10",
    DocumentType: ["GENERAL"],
    DocumentStatus: ["VENDOR_SELECTED"],
  },
  {
    DocumentNumber: "BAS250418-012",
    RegisterDate: "2025-04-18",
    Customer: "TEST COMPANY 11",
    REFNo: "REF789012",
    VesselName: "TEST VESSEL 12",
    Remark: "TEST REMARK 11",
    DocumentType: ["GENERAL"],
    DocumentStatus: ["VENDOR_SELECTED"],
  },
  {
    DocumentNumber: "BAS250417-013",
    RegisterDate: "2025-04-17",
    Customer: "TEST COMPANY 12",
    REFNo: "REF345678",
    VesselName: "TEST VESSEL 13",
    Remark: "TEST REMARK 12",
    DocumentType: ["GENERAL"],
    DocumentStatus: ["VENDOR_SELECTED"],
  },
  {
    DocumentNumber: "BAS250416-014",
    RegisterDate: "2025-04-16",
    Customer: "TEST COMPANY 13",
    REFNo: "REF901234",
    VesselName: "TEST VESSEL 14",
    Remark: "TEST REMARK 13",
    DocumentType: ["GENERAL"],
    DocumentStatus: ["VENDOR_SELECTED"],
  },
];

const RequestList = () => {
  const maxItems = 10;
  const [page, setPage] = useState<number>(0);
  const startIndex = useRef<number>(0);
  const endIndex = useRef<number>(maxItems);

  useEffect(() => {
    if (endIndex.current > requestList.length) {
      endIndex.current = requestList.length;
    }
  }, [page]);
  return (
    <div className="grid grid-cols-[1fr_1fr_1fr_1fr_2fr_1fr_1fr_1fr] w-full rounded-t-xl overflow-hidden text-sm">
      {Object.keys(requestList[0]).map((item, index) => (
        <div
          key={index}
          className="flex justify-between p-4 pr-0 bg-gray-50 border-b border-gray-200 font-medium"
        >
          {item}
          {index !== Object.keys(requestList[0]).length - 1 && (
            <div className="border-r border-gray-200" />
          )}
        </div>
      ))}
      {requestList
        .slice(startIndex.current, endIndex.current)
        .map((item, index) => (
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
              {item.Customer}
            </div>
            <div
              className="col-start-4 p-4 bg-white border-b border-gray-200 text-nowrap"
              key={index}
            >
              {item.REFNo}
            </div>
            <div
              className="col-start-5 p-4 bg-white border-b border-gray-200 text-nowrap"
              key={index}
            >
              {item.VesselName}
            </div>
            <div
              className="col-start-6 p-4 bg-white border-b border-gray-200 text-nowrap"
              key={index}
            >
              {item.Remark}
            </div>
            <div
              className="col-start-7 p-4 bg-white border-b border-gray-200 text-nowrap gap-1 flex"
              key={index}
            >
              {item.DocumentType.map((type, idx) => (
                <span
                  key={idx}
                  className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs"
                >
                  {type}
                </span>
              ))}
            </div>
            <div
              className="col-start-8 p-4 bg-white border-b border-gray-200 text-nowrap gap-1 flex"
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
          </>
        ))}
      <div className="col-span-8 flex justify-center items-center gap-2 mt-4">
        <button
          disabled={page === 0}
          onClick={() => {
            if (page > 0) {
              startIndex.current -= maxItems;
              endIndex.current = startIndex.current + maxItems;
              setPage(page - 1);
            }
          }}
          className={cn(
            page === 0
              ? "text-gray-300 hover:bg-none"
              : "text-black hover:bg-gray-50",
            "p-2 rounded-lg"
          )}
        >
          <ArrowIcon direction="left" size={20} />
        </button>
        <div className="p-2 font-bold">{page + 1}</div>
        <button
          onClick={() => {
            if (page < requestList.length / maxItems) {
              startIndex.current += maxItems;
              endIndex.current = startIndex.current + maxItems;
              setPage(page + 1);
            }
          }}
          className={cn(
            page === Math.floor(requestList.length / maxItems)
              ? "text-gray-300 hover:bg-none"
              : "text-black hover:bg-gray-50",
            "p-2 rounded-lg"
          )}
        >
          <ArrowIcon direction="right" size={20} />
        </button>
      </div>
    </div>
  );
};

export default DashboardRequestPage;
