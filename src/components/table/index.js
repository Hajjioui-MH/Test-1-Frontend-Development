import React, {useMemo} from 'react'
import { useTable, useSortBy, usePagination, useBlockLayout  } from 'react-table' //hook return a table
import { useSticky } from 'react-table-sticky';
import { Styles } from './tableStyles'
import {COLUMNS} from './columns'
import './table.css' 

const Table = ({data})=> {
 	const columns = useMemo(() => COLUMNS, []);
 	const { getTableProps, getTableBodyProps, headerGroups, 
 		 prepareRow, rows
 	} = useTable({
 		columns,
 		data,
 		initialState: { pageSize: 5 }
 	}, useSortBy, usePagination, useBlockLayout, useSticky)
 	const firstPageRows = rows.slice(0, 15)
	
	return (
	<Styles>
      <div {...getTableProps()} className="table sticky" style={{ width: 950, height: 450 }}>
        <div className="header">
          {headerGroups.map((headerGroup) => (
            <div {...headerGroup.getHeaderGroupProps()} className="tr">
              {headerGroup.headers.map((column) => (
                <div {...column.getHeaderProps()} className="th">
                  {column.render('Header')}
                </div>
              ))}
            </div>
          ))}
        </div>
        <div {...getTableBodyProps()} className="body">
          {firstPageRows.map((row) => {
            prepareRow(row);
            return (
              <div {...row.getRowProps()} className="tr">
                {row.cells.map((cell) => (
                  <div {...cell.getCellProps()} className="td">
                    {cell.render('Cell')}
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      </div>
    </Styles>
	)
}

export default Table