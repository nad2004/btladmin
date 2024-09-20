import * as React from "react"
import { Button } from "@/components/ui/button"
import { IoMdPersonAdd } from "react-icons/io";
import {
    ColumnDef,
    ColumnFiltersState,
    getFilteredRowModel,
    flexRender,
    getCoreRowModel,
    getPaginationRowModel,
    useReactTable,
  } from "@tanstack/react-table"
  import { Input } from "@/components/ui/input"
  import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  import { useNavigate } from "react-router-dom";

  interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[]
    data: TData[]
  }
   
  export function DataTable<TData, TValue>({
    columns,
    data,
  }: DataTableProps<TData, TValue>) {
    const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
      []
    )
    const table = useReactTable({
      data,
      columns,
      getCoreRowModel: getCoreRowModel(),
      getPaginationRowModel: getPaginationRowModel(),
      onColumnFiltersChange: setColumnFilters,
      getFilteredRowModel: getFilteredRowModel(),
      state: {
        columnFilters,
      },
    })
    const navigate = useNavigate(); 
    return (
      <>
      <div className="flex items-center py-4">
        <Input
          placeholder="Nhập Mã Môn Học"
          value={(table.getColumn("subject_code")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("subject_code")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
        <Button variant="outline" className="ml-auto bg-green-400" onClick={() => navigate('/subject/create')}>Thêm Môn Học<IoMdPersonAdd className="mt-[0px] ml-2 text-lg justify-self-end w-10"/></Button>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      </>
      
    )
  }