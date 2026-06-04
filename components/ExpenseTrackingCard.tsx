"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { X, AlertCircle, Check, Utensils, Plane, Monitor, Briefcase, MousePointer2 } from "lucide-react";

interface ExpenseRow {
  id: string;
  label: string;
  category: string;
  categoryIcon: React.ReactNode;
  status: "Approved" | "Flagged" | "Pending";
  amount: string;
  checked?: boolean;
}

const expenses: ExpenseRow[] = [
  {
    id: "1",
    label: "Lunch with team",
    category: "Meals",
    categoryIcon: <Utensils className="w-[15px] h-[16px] text-zinc-400" />,
    status: "Approved",
    amount: "$ 179.99",
    checked: false,
  },
  {
    id: "2",
    label: "Flight to Berlin",
    category: "Travel",
    categoryIcon: <Plane className="w-[15px] h-[16px] text-zinc-400" />,
    status: "Flagged",
    amount: "$ 849.99",
    checked: true,
  },
  {
    id: "3",
    label: "Zoom subscription",
    category: "Software",
    categoryIcon: <Monitor className="w-[15px] h-[16px] text-zinc-400" />,
    status: "Approved",
    amount: "$ 129.99",
    checked: false,
  },
  {
    id: "4",
    label: "Dinner w/ client",
    category: "Meals",
    categoryIcon: <Utensils className="w-[15px] h-[16px] text-zinc-400" />,
    status: "Pending",
    amount: "$ 219.99",
    checked: false,
  },
  {
    id: "5",
    label: "Office furniture",
    category: "Office",
    categoryIcon: <Briefcase className="w-[15px] h-[16px] text-zinc-400" />,
    status: "Approved",
    amount: "$ 2499.99",
    checked: false,
  },
];

const StatusBadge = ({ status }: { status: ExpenseRow["status"] }) => {
  const styles = {
    Approved: "bg-white border-[#A7F3D0] text-[#065F46]",
    Flagged: "bg-white border-[#FDBA74] text-[#9A3412]",
    Pending: "bg-white border-[#BFDBFE] text-[#1E40AF]",
  };

  const dotColors = {
    Approved: "bg-[#10B981]",
    Flagged: "bg-[#F97316]",
    Pending: "bg-[#3B82F6]",
  };

  return (
    <div
      className={cn(
        "flex items-center justify-center gap-[4px] px-[10px] py-[4px] rounded-full border shadow-[0_2px_4px_rgba(0,0,0,0.04),0_1px_2px_-1px_rgba(0,0,0,0.08)] h-[28px] min-w-[80px]",
        styles[status]
      )}
    >
      <div className={cn("w-[8px] h-[8px] rounded-full", dotColors[status])} />
      <span className="text-[12px] font-medium leading-[20px]">{status}</span>
    </div>
  );
};

export const ExpenseTrackingCard = () => {
  return (
    <div className="flex flex-col items-center w-full overflow-hidden rounded-[16px]">
      {/* Illustration */}
      <div className="w-full bg-[#E8EDF3] p-[60px] flex items-center justify-center relative overflow-hidden">
        <div className="w-[760px] h-[467px] bg-white rounded-[16px] p-[24px] flex flex-col gap-[24px] relative shadow-sm">
          {/* Header */}
          <div className="flex items-center justify-between w-full h-[48px]">
            <h3 className="text-[19px] font-medium tracking-[-0.38px] text-black">
              Expense tracking
            </h3>
            <div className="w-[36px] h-[36px] bg-[#E8EDF3] rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity">
              <X className="w-[16px] h-[16px] text-black" />
            </div>
          </div>

          {/* Table */}
          <div className="flex flex-col gap-[10px]">
            {expenses.map((expense) => (
              <div
                key={expense.id}
                className={cn(
                  "flex items-center h-[48px] px-[24px] rounded-[16px] bg-white gap-[12px] shadow-[0_2px_4px_rgba(0,0,0,0.04),0_1px_2px_-1px_rgba(0,0,0,0.08),0_0_0_1px_rgba(0,0,0,0.05)]",
                  expense.checked && "ring-1 ring-blue-500/20"
                )}
              >
                {/* Checkbox */}
                <div className="w-[20px] h-[20px] flex items-center justify-center">
                  <div
                    className={cn(
                      "w-[14px] h-[14px] rounded-[3px] border flex items-center justify-center transition-colors",
                      expense.checked
                        ? "bg-[#3B82F6] border-[#3B82F6]"
                        : "bg-[#FAFAFA] border-zinc-200 shadow-[0_1px_2px_rgba(0,0,0,0.12)]"
                    )}
                  >
                    {expense.checked && <Check className="w-[10px] h-[10px] text-white stroke-[3px]" />}
                  </div>
                </div>

                {/* Label */}
                <div className="w-[250px] flex items-center px-[12px]">
                  <span className="text-[13px] text-[#18181B] truncate">{expense.label}</span>
                </div>

                {/* Category */}
                <div className="w-[150px] flex items-center gap-[8px]">
                  {expense.categoryIcon}
                  <span className="text-[13px] text-[#18181B]">{expense.category}</span>
                </div>

                {/* Status */}
                <div className="flex-1 flex items-center">
                  <StatusBadge status={expense.status} />
                </div>

                {/* Amount */}
                <div className="w-[98px] flex items-center justify-end">
                  <span className="text-[13px] font-medium text-[#18181B]">{expense.amount}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="flex items-center justify-end gap-[16px] mt-auto h-[43px]">
            <div className="flex items-center gap-[4px] text-[#F97316]">
              <AlertCircle className="w-[18px] h-[18px]" />
              <span className="text-[15px] font-medium tracking-[-0.3px]">1 flagged transaction</span>
            </div>
            <button className="h-[43px] px-[42px] bg-[#3B82F6] text-white rounded-full text-[15px] font-medium tracking-[-0.3px] shadow-[0_1px_2px_rgba(0,0,0,0.12),0_0_0_1px_rgba(0,0,0,0.08)] hover:bg-blue-600 transition-colors">
              Resolve
            </button>
          </div>

          {/* Cursor */}
          <div className="absolute top-[435px] left-[702px] z-10 pointer-events-none">
            <MousePointer2 className="w-[18px] h-[18px] text-zinc-800 fill-white drop-shadow-md" />
          </div>
        </div>
      </div>

    </div>
  );
};

export default ExpenseTrackingCard;
