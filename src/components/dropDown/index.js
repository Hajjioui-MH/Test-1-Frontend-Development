import { useState, useEffect, useRef } from 'react'
import React from 'react'
import './dropDown.css'

const DropDown = ({categories, value, onChange}) => {
	const [open, setOpen] = useState(false)
	const ref = useRef(null)
	useEffect(() => {
		document.addEventListener("click",close);
		return () => document.removeEventListener("click",close);
	}, [])
	//close the dropdown when you click outside it
	function close(e) {
		setOpen( e && e.target === ref.current)
	}

	return (
		<div style={{width:200,margin:'12px'}} className="dropdown">
			<div className="control" onClick={()=> setOpen(!open)} >
				<div className="selected-value" ref={ref}>{ value != null ? value : "Select category ..."}</div>
				<div className={`arrow ${ open ? "open" : null }`}></div>
			</div>
			<div className={`options ${ open ? "open" : null }`}>
				<div className="option" 
					onClick={() => {
						onChange(null)
						setOpen(false)
					}} >
				-none-</div>
				{
					categories.map(category => ( 
						<div key={category}
							className={`option ${ category === value ? "selected" : null }`} 
							onClick={()=>{
								onChange(category)
								setOpen(false)
							}}>
						{category} </div> ) )
				}
				
			</div>
		</div>
	)
}

export default DropDown