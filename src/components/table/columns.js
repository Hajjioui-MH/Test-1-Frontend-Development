import { format } from 'date-fns'
import Scroll from '../Scroll'

export const COLUMNS = [
	{
		Header : 'ID',
		accessor : '_id',
		sticky : 'left' ,
		width : 160
	},
	{
		Header : 'Name',
		accessor : 'name',
		sticky : 'left'
	},
	{
		Header : 'Description',
		accessor : data => data.description.length > 300 ? <Scroll> {data.description} </Scroll> : data.description
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
		Header : 'PID',
		accessor : 'pid',
	},
	{
		Header : '__V',
		accessor : '__v',
	},
	{
		Header : 'ModelId',
		accessor : 'modelId',
	},
	{
		Header : 'Datasheet',
		accessor : data => <a href={data.datasheet} > datasheet link </a>,
	},
	{
		Header : 'Link',
		accessor : data => <a href={data.link} > link </a>,
	},
	{
		Header : 'Thumbnail',
		accessor : data => <a href={data.thumbnail} > thumbnail link </a>,
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
