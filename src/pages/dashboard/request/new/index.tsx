import Button from "../../../../components/form/button";
import Input from "../../../../components/form/input";
import {
  CalendarIcon,
  FullScreenIcon,
  MinusSearchIcon,
  PlusCircleIcon,
  PlusSearchIcon,
  TrashIcon,
} from "../../../../components/icons/flowmate";

const DashboardNewRequestPage = () => {
  return (
    <div className="px-2 pt-8 pb-4">
      <div className="flex flex-col gap-8 w-full p-4 py-4 bg-white rounded-lg border-2 border-gray-300">
        <div className="flex gap-4 items-center text-2xl font-bold">
          Make Inquiry
          <span className="text-sm font-normal">견적요청서 작성</span>
        </div>
        <div className="grid grid-cols-2 gap-x-2 gap-y-4">
          <div className="flex flex-row gap-2">
            <InputField label="문서번호(Document No.)" essential>
              <Input />
            </InputField>
            <InputField label="Ref No." essential>
              <Input />
            </InputField>
          </div>
          <div className="flex flex-row gap-2">
            <InputField label="작성일자(Register Date)" essential>
              <div className="flex items-center justify-between w-full h-8 px-2 border border-gray-300 rounded-md text-gray-400">
                <div className="text-black">2025-06-01</div>
                <CalendarIcon size={16} />
              </div>
            </InputField>
            <InputField label="화폐(Currency)" essential>
              <select className="w-full h-8 px-1 border border-gray-300 rounded-md">
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="JPY">JPY</option>
                <option value="KOR">KOR</option>
              </select>
            </InputField>
            <InputField label="환율(Exchange Rate)" essential>
              <Input placeholder="" />
            </InputField>
          </div>
          <div className="flex flex-row gap-2">
            <InputField label="매출처(Customer)">
              <div className="flex gap-1">
                <Input />
                <Button>Register</Button>
              </div>
            </InputField>
            <InputField label="선명(Vessel Name)">
              <div className="flex gap-1">
                <Input />
                <Button>Register</Button>
              </div>
            </InputField>
          </div>
          <div className="grid grid-cols-[1fr_2fr] gap-2">
            <InputField label="색상(Color)">
              <div className="flex gap-1">
                <div className="border border-gray-300 rounded-md p-1 h-8 aspect-square">
                  <div className="border border-gray-300 rounded-sm w-full h-full"></div>
                </div>
                <Input />
              </div>
            </InputField>
            <InputField label="비고(Remark)">
              <Input />
            </InputField>
          </div>
          <div className="flex flex-row gap-2">
            <InputField label="매출처(Customer)">
              <div className="flex gap-1">
                <Input />
                <Button>Register</Button>
              </div>
              <Input placeholder="Search supplier by category & maker" />
            </InputField>
          </div>
          <InputField label="SearchSuppliers:">
            <textarea className="h-full resize-none p-2 rounded-md border border-gray-300 outline-[#007BFF]" />
          </InputField>
        </div>
        <div className="flex gap-2 items-center">
          <div className="flex-1 border-b-2 border-dashed border-blue-400" />
          <div>ITEMS</div>
          <div className="flex-1 border-b-2 border-dashed border-blue-400" />
        </div>
        <div className="flex gap-2 items-center">
          <div className="text-sm ">Suplliers: </div>
          <select className="h-8 w-40 px-1 border border-gray-300 rounded-md text-gray-500">
            <option value="Supplier1">Supplier 1</option>
            <option value="Supplier2">Supplier 2</option>
            <option value="Supplier3">Supplier 3</option>
          </select>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex gap-2 items-center">
            <button className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-md">
              <MinusSearchIcon size={14} />
            </button>
            <div>100%</div>
            <button className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-md">
              <PlusSearchIcon size={14} />
            </button>
            <Button standard="secondary">Delete All Items</Button>
            <Button standard="tertiary">
              <FullScreenIcon size={14} />
              <span className="ml-2">Fullscreen</span>
            </Button>
          </div>
          <div className="grid grid-cols-[1fr_4fr_2fr_9fr_1fr_2fr_2fr] items-center rounded-t-xl overflow-hidden text-sm">
            <div className="flex justify-between p-4 pr-0 bg-gray-50 border-b border-gray-200 font-medium">
              <span>No.</span>
              <div className="border-r border-gray-200" />
            </div>
            <div className="flex justify-between p-4 pr-0 bg-gray-50 border-b border-gray-200 font-medium">
              <span>PartNo</span>
              <div className="border-r border-gray-200" />
            </div>
            <div className="flex justify-between p-4 pr-0 bg-gray-50 border-b border-gray-200 font-medium">
              <span>OPT</span>
              <div className="border-r border-gray-200" />
            </div>
            <div className="flex justify-between p-4 pr-0 bg-gray-50 border-b border-gray-200 font-medium">
              <span>Name</span>
              <div className="border-r border-gray-200" />
            </div>
            <div className="flex justify-between p-4 pr-0 bg-gray-50 border-b border-gray-200 font-medium">
              <span>QTY</span>
              <div className="border-r border-gray-200" />
            </div>
            <div className="flex justify-between gap-2 p-2.5 pr-0 bg-gray-50 border-b border-gray-200 font-medium">
              <select
                className="w-full h-8 px-1 border border-gray-300 rounded-md"
                defaultValue="Unit"
              >
                <option value="Unit" disabled>
                  Unit
                </option>
                <option value="kg">kg</option>
                <option value="pcs">pcs</option>
                <option value="m">m</option>
                <option value="cm">cm</option>
                <option value="mm">mm</option>
              </select>
              <div className="border-r border-gray-200" />
            </div>
            <div className="flex justify-between p-4 pr-0 bg-gray-50 border-b border-gray-200 font-medium">
              <span>Action</span>
              <div className="border-r border-gray-200" />
            </div>
            <div className="col-start-1 p-4 bg-white border-b border-gray-200 text-nowrap">
              1
            </div>
            <div className="col-start-2 p-2.5 bg-white border-b border-gray-200 text-nowrap">
              <Input />
            </div>
            <div className="col-start-3 p-2.5 bg-white border-b border-gray-200 text-nowrap">
              <select
                className="w-full h-8 px-1 border border-gray-300 rounded-md"
                defaultValue="OPT"
              >
                <option value="OPT" disabled>
                  OPT
                </option>
                <option value="Option1">MAKER</option>
                <option value="Option2">TYPE</option>
                <option value="Option3">ITEM</option>
              </select>
            </div>
            <div className="col-start-4 p-2.5 bg-white border-b border-gray-200 text-nowrap">
              <Input />
            </div>
            <div className="col-start-5 p-2.5 bg-white border-b border-gray-200 text-nowrap">
              <Input />
            </div>
            <div className="col-start-6 p-2.5 bg-white border-b border-gray-200 text-nowrap">
              <Input />
            </div>
            <div className="col-start-7 flex items-center justify-center gap-2 p-2.5 bg-white border-b border-gray-200 text-nowrap">
              <button className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-md">
                <PlusCircleIcon size={14} />
              </button>
              <button className="w-8 h-8 flex items-center justify-center border border-red-400 rounded-md text-red-400">
                <TrashIcon size={14} />
              </button>
            </div>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <div className="flex gap-2 items-center">
            <div className="text-sm ">Suplliers: </div>
            <select className="h-8 w-40 px-1 border border-gray-300 rounded-md text-gray-500">
              <option value="Supplier1">Supplier 1</option>
              <option value="Supplier2">Supplier 2</option>
              <option value="Supplier3">Supplier 3</option>
            </select>
          </div>
          <div className="flex gap-2 items-center">
            <Button standard="quaternary">Edit Header Text</Button>
            <Button standard="quaternary">PDF Preview</Button>
          </div>
          <div className="flex gap-2 items-center">
            <div className="text-sm ">LANGUAGE: </div>
            <select className="h-8 w-40 px-1 border border-gray-300 rounded-md text-gray-500">
              <option value="EN">English</option>
              <option value="KR">한국어</option>
              <option value="JP">日本語</option>
              <option value="CN">中文</option>
              <option value="FR">Français</option>
              <option value="DE">Deutsch</option>
            </select>
          </div>
        </div>
        <div className="flex gap-4 justify-end items-center">
          <Button standard="quaternary">Back</Button>
          <Button>Send Email</Button>
          <Button>Save</Button>
        </div>
      </div>
    </div>
  );
};

const InputField = ({
  label,
  essential = false,
  children,
}: {
  label: string;
  essential?: boolean;
  children: React.ReactNode;
}) => {
  return (
    <div className="flex-1 flex flex-col gap-2">
      <label className="text-sm font-normal">
        {essential && <span className="text-red-500">* </span>}
        {label}
      </label>
      {children}
    </div>
  );
};

export default DashboardNewRequestPage;
