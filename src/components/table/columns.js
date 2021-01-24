import { format } from 'date-fns'
import Scroll from '../Scroll'

export const COLUMNS = [
	{
		Header : 'PID',
		accessor : 'pid',
		sticky : 'left' 
	},
	{
		Header : 'Name',
		accessor : 'name',
		sticky : 'left'
	},
	{
		Header : 'Category',
		accessor : 'category'
	},
	{
		Header : 'Subcategory',
		accessor : 'subcategory'
	},
	{
		Header : 'Description',
		accessor : data => data.description.length > 300 ? <Scroll> {data.description} </Scroll> : data.description
	},
	{
		Header : 'CreatedAt',
		accessor : 'createdAt',
		Cell : ({value}) => format(new Date(value), 'yyyy-MM-dd')
	},
	{
		Header : 'UpdatedAt',
		accessor : 'updatedAt',
		Cell : ({value}) => format(new Date(value), 'yyyy-MM-dd')
	},
	{
		Header : 'Features',
		id : 'features',
		accessor : data => <Scroll>
			{
				data.features.map(item => <li key={item} style={{paddingBottom:'10px'}} > {item} </li>)
			}
			</Scroll> 
	},
	{
		Header : 'Specifications',
		id : 'specifications',
		width : 250,
		accessor: data =>{
			return <Scroll>
			<table className="table_2">
				<tbody>
					<tr>
						<th> name </th>
						<th> category </th>
						<th> value </th>
					</tr>
					{
					data.specifications.map( item => <tr key={item.name} >
						<td>{item.name}</td>
						<td>{item.category}</td>
						<td>{item.value}</td>
					</tr>)
					}
				</tbody>
			</table>
			</Scroll>
		}
	}

]
