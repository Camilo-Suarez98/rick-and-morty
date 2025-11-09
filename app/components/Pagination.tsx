"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

export const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) => {
  return (
    <div className="flex items-center justify-center gap-2 mt-6">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="p-2 bg-slate-800 cursor-pointer border border-slate-700 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-colors hover:bg-cyan-500 hover:text-white"
        aria-label="Previous page"
      >
        <ChevronLeft />
      </button>

      <span className="px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white font-medium">
        Page {currentPage} of {totalPages}
      </span>

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="p-2 bg-slate-800 cursor-pointer border border-slate-700 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-colors hover:bg-cyan-500 hover:text-white"
        aria-label="Next page"
      >
        <ChevronRight />
      </button>
    </div>
  );
};
