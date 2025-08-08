// REACT TABLE EXAMPLE

import { useCallback, useEffect, useMemo, useState } from 'react'
import { useReactTable, getCoreRowModel, createColumnHelper, flexRender, getSortedRowModel, getFilteredRowModel, getPaginationRowModel } from '@tanstack/react-table'
import type { SortingState } from '@tanstack/react-table'
import {useQueryState, parseAsInteger } from 'nuqs'

import MOCK_DATA from './MOCK_DATA.json'
import { ArrowUpDown, ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, Mail, Phone, Search, User } from 'lucide-react'
import { useSearchParams } from 'react-router-dom'

type Data = {
  id: number;
  first_name: string;
  last_name: string;
  email: string
  gender: string;
  age: number;
  phone_number: string
}


const columnHelper = createColumnHelper<Data>()

const columns = [
  columnHelper.accessor('id', {
    cell: (info) => info.getValue(),
    header: () => (
      <span className='flex items-center'>
        <User className='mr-2' size={16} /> ID</span>
    )
  }),
  columnHelper.accessor('first_name', {

    cell: (info) => info.getValue(),
    header: () => (
      <span className='flex  items-center'><User className='mr-2' size={20} />  First Name</span>
    ),
  }
  ),
  columnHelper.accessor('last_name', {
    cell: (info) => info.getValue(),
    header: () => (<span className='flex items-center'><User className='mr-2' size={20} /> Last Name</span>),
  }),
  columnHelper.accessor('email', {
    cell: (info) => (<span className='italic text-blue-600'>{info.getValue()}</span>),
    header: () => (<span className='flex items-center'><Mail className='mr-2' size={16} />Email</span>),
  }),
  columnHelper.accessor('gender', {
    cell: (info) => info.getValue(),
    header: () => (<span className='flex items-center'><User className='mr-2' size={16} /> Gender</span>),
  }),
  columnHelper.accessor('age', {
    cell: (info) => info.getValue(),
    header: () => (<span className='flex items-center'><User className='mr-2' size={16} />Age</span>),
  }),
  columnHelper.accessor('phone_number', {
    cell: (info) => info.getValue(),
    header: () => <span className='flex items-center'><Phone className='mr-2' size={16} /> Phone Number</span>,
  }),

]


const Table = () => {

  const [data] = useState(() => [...MOCK_DATA])
  const [sorting, setSorting] = useState<SortingState>([])
  const [globalFilter, setGlobalFilter] = useState('')
  const [searchParams, setSearchParams] = useSearchParams();

  // const [page, setPage] = useQueryState('page',parseAsInteger.withDefault(0))
  // const [pageSize,setPageSize] = useQueryState('pageSize',parseAsInteger.withDefault(10))

  const getpagination = useCallback(() => {
    const pageIndex= searchParams.get("page")?Number(searchParams.get("page"))-1:0
    const pageSize= searchParams.get("pageSize")?Number(searchParams.get("pageSize")):10
    return{
      pageIndex,
      pageSize
    }
    
  },[searchParams])

  const pagination = getpagination()

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
      globalFilter,
      pagination,
    },
    
    getCoreRowModel: getCoreRowModel(),

    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),

    onGlobalFilterChange: setGlobalFilter,
    getFilteredRowModel: getFilteredRowModel(),

    onPaginationChange: (updater) => {
      const newPaginationState = typeof updater === 'function' ? updater(table.getState().pagination) : updater;
      // setPage(newPaginationState.pageIndex+1);
      // setPageSize(newPaginationState.pageSize);
      setSearchParams((prev)=>{
        prev.set("page",String(newPaginationState.pageIndex+1));
        prev.set("pageSize",String(newPaginationState.pageSize));
        return prev;
      })
    },
    getPaginationRowModel:getPaginationRowModel(),
    // manualPagination:true,
  })
  console.log(table.getHeaderGroups())


  return (
    <div className='flex flex-col min-h-screeen max-w-6xl mx-auto py-12 px-4 sm:px6- lg:px-8'>
      <div className='mb-6 relative'>
        <input
          type='text'
          placeholder='Search...'
          className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
          value={globalFilter ?? ''}
          onChange={(e) => setGlobalFilter(e.target.value)}
        />
        <Search className='absolute right-3 top-2.5 text-gray-400' size={20} />
      </div>
      <div className='overflow-x-auto bg-white shadow-xl rounded-lg'>
        <table className='min-w-full divide-y divide-gray-200'>
          <thead className='bg-gray-50 '>
            {
              table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map((headers) => (
                    <th key={headers.id} className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-25'>
                      <div {...{
                        className: headers.column.getCanSort() ? 'cursor-pointer select-none' : '',
                        onClick: headers.column.getToggleSortingHandler(),
                      }}
                      >
                        {flexRender(headers.column.columnDef.header, headers.getContext())}
                        <ArrowUpDown className='ml-2 h-4 w-4'/>
                      </div>
                    </th>
                  ))}
                </tr>
              ))
            }
          </thead>
          <tbody className='bg-white divide-y divide-gray-200'>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id} className='hover:bg-gray-100'>
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className='px-6 py-4 whitespace-nowrap text-sm text-gray-900'>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>

      </div>
      <div className='flex  sm:flex-row justify-between items-center mt-6'>
        <div className='flex  items-center mb-4 sm:mb-0 shadow-xl p-2'>
          <span className='mr-2'>Items per page</span>
          <select className='border border-gray-300 rounded-lg px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500'
            value={table.getState().pagination.pageSize}
            onChange={(e) => {
              table.setPageSize(Number(e.target.value))
            }}>
            {[5, 10, 20, 30].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                {pageSize}
              </option>
            ))}
          </select>
        </div>
        <div className='flex items-center space-x-2'>

          <button className='p-2 bg-gray-200 rounded-lg hover:bg-gray-300 disabled:opacity-50'
            onClick={() => table.setPageIndex(0)}
            disabled={!table.getCanPreviousPage()}>
            <ChevronsLeft size={20} />
          </button>

          <button className='p-2 bg-gray-200 rounded-lg hover:bg-gray-300 disabled:opacity-50'
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}>
            <ChevronLeft size={20} />
          </button>

          <span className='flex items-center'>
            <input
              min={1}
              max={table.getPageCount()}
              type='number'
              value={table.getState().pagination.pageIndex + 1}
              onChange={(e) => {
                const page = e.target.value ? Number(e.target.value) - 1 : 0
                table.setPageIndex(page)
              }} />
            <span className='ml-2'>of {table.getPageCount()}</span>
          </span>

          <button className='p-2 bg-gray-200 rounded-lg hover:bg-gray-300 disabled:opacity-50'
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}>
            <ChevronsRight size={20} />
          </button>

          <button className='p-2 bg-gray-200 rounded-lg hover:bg-gray-300 disabled:opacity-50'
            onClick={() => table.setPageIndex(table.getPageCount() -1)}
            disabled={!table.getCanNextPage()}>
            <ChevronRight size={20} />
          </button>

        </div>
      </div>
    </div>
  )
}

export default Table